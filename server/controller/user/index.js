const fs = require("fs");
const Content = require("../../model/Content");
const Member = require("../../model/Member");
const User = require("../../model/User");
const validator = require("../../utils/validator");
const idDecoder = require("../../utils/idDecoder");
const verify = require("../../utils/verify");

fn_register = async (ctx, next) => {
    const request = ctx.request.body;
    const result = validator.register.validate(request, {covert: false});
    const value = result.error == null;
    if(!value) {
        return ctx.body = 
        {   
            status: 400,
            type: 'error',
            msg: 'incorrect entry of user or password, please try again'
        }
    };
    const {name, email, password} = request;
    try{
        let user = await User.findOne({ email });
        if(user){
            return ctx.body = {
                status: 400,
                type: 'error', 
                msg: 'User already exists'
            };
        }
        let type = "User";
        user = new User({
            name,
            email,
            type,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        const payload = {
            user: {
                id: user.id,
                type: user.type
            }
        }
        const token = jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600}, (err, token) => {
            if(err) throw err;
                console.log(token);
        });
        return ctx.body = {
            type: 'success',
            msg: 'login sucess',
            data: token
        }

    }catch(err){
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
};

fn_login = async (ctx, next) => {
    const request = ctx.request.body;
    const result = validator.login.validate(request, {covert: false});
    const value = result.error == null;
    if(!value) {
        return ctx.body = {
            status: 400,
            type: 'error', 
            msg: 'incorrect entry of user or password, please try again'
        }
    }
    const {email, password} = request;
    try{
        let user = await User.findOne({ email });
        if(!user){
            return ctx.body = {
                status: 400,
                type: 'error', 
                msg: 'invalid credential'
            };
        }

        const isMarched = await bcrypt.compare(password, user.password);
        
        if(!isMarched) {
            return ctx.body = {
                status: 400,
                type: 'error', 
                msg: 'invalid credential'
            };
        }

        const payload = {
            user: {
                id: user.id,
                type: user.type
            }
        }
        const token = jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 3600}, (err, token) => {
            if(err) throw err;
                console.log(token);
        });
        return ctx.body = {
            type: 'success',
            msg: 'login success',
            data: token
        };
    }catch(err){
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;

    }
}

fn_postMember = async (ctx, next) => {
    try{
        const request = ctx.request.body;
        const {name, email, position, bio} = request;
        const image = ctx.request.files.file;
        const reader = fs.createReadStream(image.path);
        let filePath = path.join(__dirname, "/public/image") + `/${image.name}`;
        const upStream = fs.createWriteStream(filePath);
        reader.pipe(upStream);
        let member = new Member({
            name,
            email,
            position,
            bio,
            avatar: filePath
        });
        await member.save();
        return ctx.body = {
            type: 'success',
            msg: 'post success'
        }
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_postContent = async (ctx, next) => {
    try{
        const request = ctx.request.body;
        const {pageID, title, pageContent} = request;
        const images = ctx.request.files.file;
        const imgPaths = [];
        for(let image of images) {
            const reader = fs.createReadStream(image.path);
            let filePath = path.join(__dirname, "/public/image") + `/${image.name}`;
            const upStream = fs.createWriteStream(filePath);
            reader.pipe(upStream);
            imgPaths.push(filePath);
        }
        let content = new Content({
            pageID,
            title,
            pageContent,
            imgPaths
        });
        await content.save();
        return ctx.body = {
            type: 'success',
            msg: 'post success'
        }
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_updateMember = async (ctx, next) => {
    try{
        const request = ctx.request.body;
        const {name, email, position, bio, imgUpdate} = request;
        if(imgUpdate) {
            const image = ctx.request.files.file;
            const reader = fs.createReadStream(image.path);
            let filePath = path.join(__dirname, "/public/image") + `/${image.name}`;
            const upStream = fs.createWriteStream(filePath);
            reader.pipe(upStream);
            await Member.findOneAndUpdate({email: email}, {$set: {avatar: filePath}});
        }
        await Member.findOneAndUpdate({email: email}, {$set: {name: name, email: email, position: position, bio: bio}});        
        return ctx.body = {
            type: 'success',
            msg: 'post success'
        }
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_updateContent = async (ctx, next) => {
    try{
        const request = ctx.request.body;
        const {pageID, pageContent, imgUpdate, conUpdate} = request;
        
        const images;
        const imgPaths;
        if(imgUpdate) {
            images = ctx.request.files.file;
            imgPaths = [];
            for(let image of images) {
                const reader = fs.createReadStream(image.path);
                let filePath = path.join(__dirname, "/public/image") + `/${image.name}`;
                const upStream = fs.createWriteStream(filePath);
                reader.pipe(upStream);
                imgPaths.push(filePath);
            }
            await Content.findOneAndUpdate({pageID : pageID}, {$set: {imgPaths: imgPaths}});
        }
        if(conUpdate) {
            await Content.findOneAndUpdate({pageID : pageID}, {$set: {pageContent: pageContent}});
        }
        return ctx.body = {
            type: 'success',
            msg: 'post success'
        }
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

module.exports = {
    postRegister: fn_register,
    postLogin: fn_login,
    postMember: fn_postMember,
    postContent: fn_postContent,
    updateMember: fn_updateMember,
    updateContent: fn_updateContent
}
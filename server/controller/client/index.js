
const Content = require("../../model/Content");
const Member = require("../../model/Member");

fn_getPage = async (ctx, next) => {
    try {
        const params = ctx.request.query;
        if(params && params.pageID == 3) {
            const members = await fn_getMembers(ctx);
            if(members) {
                ctx.response.status = 200;
                const data = {
                    members: members
                }
                return ctx.body = data;
            }
        }else {
            let pageContent = await fn_getContent(ctx, next);
            if(!pageContent) {
                ctx.response.message = "No content found. ";
                ctx.response.status = 404;
            }
            const data = pageContent;
            return ctx.body = data;
        }
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
    
}

fn_getContent = async (ctx) => {
    try {
        const content = await Content.findOne({pageID: ctx.params.pageID});
        return content;
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_getMembers = async (ctx) => {
    try{
        const members = await Member.find();
        return members;
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

module.exports = {
    getPage: fn_getPage,
    getContent: fn_getContent
}
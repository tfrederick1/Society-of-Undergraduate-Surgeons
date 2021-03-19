const Content = require("../../model/Content");
const Member = require("../../model/Member");
const Event = require("../../model/Event");

fn_postMember = async (ctx, next) => {
    const request = ctx.request.body;
    const {name, email, position} = request;
    let member = new Member({
        name,
        email,
        position
    });
    await member.save();
    return ctx.body = {
        type: 'success',
        msg: 'login success'
    }
}

fn_postEvent = async (ctx, next) => {
    const request = ctx.request.body;
    const{name, status, description, date, location, time} = request;
    let event = new Event({
        name,
        status,
        description,
        date,
        location, 
        time
    });
    await event.save();
    return ctx.body = {
        type: "success",
        msg: "login success"
    }
    
}

module.exports = {
    postMember: fn_postMember,
    postEvent: fn_postEvent
}
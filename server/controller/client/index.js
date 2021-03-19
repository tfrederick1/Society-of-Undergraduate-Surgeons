
const Content = require("../../model/Content");
const Member = require("../../model/Member");
const Event = require("../../model/Event");

fn_getPage = async (ctx, next) => {
    try {
        let nextEvent = await fn_getEvent(ctx);
        const params = ctx.request.query;
        if(params && params.pageID == 3) {
            const members = await fn_getMembers(ctx);
            if(members) {
                const data = {
                    members: members,
                    event: nextEvent
                }
                return ctx.body = {data};
            }
        }else if(params.pageID == 4) {
            //TODO: implement and add calendar controller
        }
        let pageContent = await fn_getContent(ctx, next);
        const data = {
            content: pageContent,
            event: nextEvent
        }
        if(!pageContent) {
            ctx.response.message = "No content found. ";
            ctx.response.status = 404;
        }
        if(!nextEvent) {
            ctx.response.message = ctx.response.message + "No upcoming event found";
        }
        await next();
        return ctx.body = {data};
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

fn_syncEvent = async (ctx) => {
    try {    
        await Event.updateMany({status: "Upcoming"|"Ongoing", date: {$lt: Date.now()}}, {$set: {status: "Ended"}});
        await Event.updateMany({status: "Upcoming", date: Date.now()}, {$set: {status: "Ongoing"}});
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_getNextEvent = async (ctx) => {
    try {    
        let mysort = {date: 1};
        let event = await Event.find({status: "Upcoming"}).sort(mysort).limit(1);
        return event;
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_getEvent = async (ctx) => {
    try {
        await fn_syncEvent(ctx);
        let event = await fn_getNextEvent(ctx);
        return event;
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
    getContent: fn_getContent,
    syncEvent: fn_syncEvent,
    getNextEvent: fn_getNextEvent,
    getEvent: fn_getEvent
}

const Content = require("../../model/Content");
const Member = require("../../model/Member");
const Event = require("../../model/Event");

fn_getPage = async (ctx, next) => {
    try {
        let pageContent = fn_getContent(ctx, next);
        let nextEvent = fn_getEvent(ctx, next);
        const data = {
            content: pageContent,
            event: nextEvent
        }
        if(!content) {
            ctx.response.message = "No content found";
            ctx.response.status = 404;
        }
        if(!nextEvent) {
            ctx.response.message = ctx.response.message + "No upcoming event found";
        }
        return ctx.body = response.json(data);
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
    
}

fn_getContent = async (ctx, next) => {
    try {
        const content = await Content.findOne({pageID: ctx.request.params.pageID});
        return content;
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_syncEvent = async (ctx, next) => {
    try {    
        await Event.updateMany({status: "Upcoming"|"Ongoing", date: {$lt: new Date()}}, {$set: {status: "Ended"}});
        await Event.updateMany({sattus: "Upcoming", date: new Date()}, {$set: {status: "Ongoing"}});
    }catch(err) {
        console.error(err.message);
        ctx.response.status = err.status || 500;
        ctx.response.message = err.message;
    }
}

fn_getNextEvent = async (ctx, next) => {
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

fn_getEvent = (ctx, next) => {
    try {
        await fn_syncEvent(ctx, next);
        let event = await fn_getNextEvent(ctx, next);
        return event;
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
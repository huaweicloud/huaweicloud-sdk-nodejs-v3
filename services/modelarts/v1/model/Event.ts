

export class Event {
    public message?: string;
    public level?: string;
    public time?: string;
    public source?: string;
    public constructor() { 
    }
    public withMessage(message: string): Event {
        this['message'] = message;
        return this;
    }
    public withLevel(level: string): Event {
        this['level'] = level;
        return this;
    }
    public withTime(time: string): Event {
        this['time'] = time;
        return this;
    }
    public withSource(source: string): Event {
        this['source'] = source;
        return this;
    }
}
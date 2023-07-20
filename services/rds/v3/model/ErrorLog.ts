

export class ErrorLog {
    public time?: string;
    public level?: string;
    public content?: string;
    public constructor(time?: string, level?: string, content?: string) { 
        this['time'] = time;
        this['level'] = level;
        this['content'] = content;
    }
    public withTime(time: string): ErrorLog {
        this['time'] = time;
        return this;
    }
    public withLevel(level: string): ErrorLog {
        this['level'] = level;
        return this;
    }
    public withContent(content: string): ErrorLog {
        this['content'] = content;
        return this;
    }
}
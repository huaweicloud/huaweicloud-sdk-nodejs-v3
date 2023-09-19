

export class LogList {
    public content?: string;
    public date?: string;
    public level?: string;
    public constructor() { 
    }
    public withContent(content: string): LogList {
        this['content'] = content;
        return this;
    }
    public withDate(date: string): LogList {
        this['date'] = date;
        return this;
    }
    public withLevel(level: string): LogList {
        this['level'] = level;
        return this;
    }
}
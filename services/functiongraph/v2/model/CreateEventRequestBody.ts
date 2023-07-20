

export class CreateEventRequestBody {
    public name?: string;
    public content?: string;
    public constructor(name?: string, content?: string) { 
        this['name'] = name;
        this['content'] = content;
    }
    public withName(name: string): CreateEventRequestBody {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateEventRequestBody {
        this['content'] = content;
        return this;
    }
}
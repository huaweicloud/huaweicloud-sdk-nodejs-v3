

export class CreateEventRequestBody {
    public name?: string;
    public content?: string;
    public constructor() { 
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
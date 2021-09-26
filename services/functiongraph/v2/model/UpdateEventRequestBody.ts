

export class UpdateEventRequestBody {
    public content?: string;
    public constructor() { 
    }
    public withContent(content: string): UpdateEventRequestBody {
        this['content'] = content;
        return this;
    }
}
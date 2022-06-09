

export class UpdateEventRequestBody {
    public content: string;
    public constructor(content?: any) { 
        this['content'] = content;
    }
    public withContent(content: string): UpdateEventRequestBody {
        this['content'] = content;
        return this;
    }
}
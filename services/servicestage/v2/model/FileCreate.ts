

export class FileCreate {
    public message?: string;
    public content?: string;
    public constructor(message?: string, content?: string) { 
        this['message'] = message;
        this['content'] = content;
    }
    public withMessage(message: string): FileCreate {
        this['message'] = message;
        return this;
    }
    public withContent(content: string): FileCreate {
        this['content'] = content;
        return this;
    }
}
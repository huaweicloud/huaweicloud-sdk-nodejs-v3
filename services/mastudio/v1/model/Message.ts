

export class Message {
    public role?: string;
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withRole(role: string): Message {
        this['role'] = role;
        return this;
    }
    public withContent(content: string): Message {
        this['content'] = content;
        return this;
    }
}
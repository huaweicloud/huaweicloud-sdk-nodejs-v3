

export class MessageItem {
    public role?: string;
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withRole(role: string): MessageItem {
        this['role'] = role;
        return this;
    }
    public withContent(content: string): MessageItem {
        this['content'] = content;
        return this;
    }
}
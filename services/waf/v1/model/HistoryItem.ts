

export class HistoryItem {
    public role?: string;
    public content?: string;
    public constructor() { 
    }
    public withRole(role: string): HistoryItem {
        this['role'] = role;
        return this;
    }
    public withContent(content: string): HistoryItem {
        this['content'] = content;
        return this;
    }
}
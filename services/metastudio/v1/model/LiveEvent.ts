

export class LiveEvent {
    public timestamp?: number;
    public type?: number;
    public content?: string;
    public constructor(timestamp?: number) { 
        this['timestamp'] = timestamp;
    }
    public withTimestamp(timestamp: number): LiveEvent {
        this['timestamp'] = timestamp;
        return this;
    }
    public withType(type: number): LiveEvent {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): LiveEvent {
        this['content'] = content;
        return this;
    }
}


export class ResetConsumeOffsetReq {
    public topic?: string;
    public timestamp?: number;
    public constructor() { 
    }
    public withTopic(topic: string): ResetConsumeOffsetReq {
        this['topic'] = topic;
        return this;
    }
    public withTimestamp(timestamp: number): ResetConsumeOffsetReq {
        this['timestamp'] = timestamp;
        return this;
    }
}
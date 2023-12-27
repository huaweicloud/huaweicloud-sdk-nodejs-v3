

export class ResetConsumeOffsetReq {
    public topic?: string;
    public timestamp?: number;
    public constructor(topic?: string, timestamp?: number) { 
        this['topic'] = topic;
        this['timestamp'] = timestamp;
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
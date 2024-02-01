

export class ResetConsumeOffsetReq {
    public topic?: string;
    public timestamp?: string;
    public constructor(topic?: string, timestamp?: string) { 
        this['topic'] = topic;
        this['timestamp'] = timestamp;
    }
    public withTopic(topic: string): ResetConsumeOffsetReq {
        this['topic'] = topic;
        return this;
    }
    public withTimestamp(timestamp: string): ResetConsumeOffsetReq {
        this['timestamp'] = timestamp;
        return this;
    }
}
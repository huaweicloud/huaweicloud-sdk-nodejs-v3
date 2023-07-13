

export class ResetMessageOffsetReq {
    public topic: string;
    public partition?: number;
    private 'message_offset'?: number | undefined;
    public timestamp?: number;
    public constructor(topic?: any) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): ResetMessageOffsetReq {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ResetMessageOffsetReq {
        this['partition'] = partition;
        return this;
    }
    public withMessageOffset(messageOffset: number): ResetMessageOffsetReq {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: number | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset() {
        return this['message_offset'];
    }
    public withTimestamp(timestamp: number): ResetMessageOffsetReq {
        this['timestamp'] = timestamp;
        return this;
    }
}
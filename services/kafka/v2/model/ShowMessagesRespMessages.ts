

export class ShowMessagesRespMessages {
    public topic?: string;
    public partition?: number;
    private 'message_offset'?: number;
    public size?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withTopic(topic: string): ShowMessagesRespMessages {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): ShowMessagesRespMessages {
        this['partition'] = partition;
        return this;
    }
    public withMessageOffset(messageOffset: number): ShowMessagesRespMessages {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: number  | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset(): number | undefined {
        return this['message_offset'];
    }
    public withSize(size: number): ShowMessagesRespMessages {
        this['size'] = size;
        return this;
    }
    public withTimestamp(timestamp: number): ShowMessagesRespMessages {
        this['timestamp'] = timestamp;
        return this;
    }
}
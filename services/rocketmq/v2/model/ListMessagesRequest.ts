

export class ListMessagesRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public topic?: string;
    public queue?: string;
    public limit?: number;
    public offset?: number;
    public key?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'msg_id'?: string;
    public constructor(engine?: string, instanceId?: string, topic?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withEngine(engine: string): ListMessagesRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListMessagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListMessagesRequest {
        this['topic'] = topic;
        return this;
    }
    public withQueue(queue: string): ListMessagesRequest {
        this['queue'] = queue;
        return this;
    }
    public withLimit(limit: number): ListMessagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMessagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withKey(key: string): ListMessagesRequest {
        this['key'] = key;
        return this;
    }
    public withStartTime(startTime: string): ListMessagesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMessagesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMsgId(msgId: string): ListMessagesRequest {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
}
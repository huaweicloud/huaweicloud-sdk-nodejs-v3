

export class ListMessagesForRocketMqRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public queue?: string;
    public limit?: number;
    public offset?: number;
    public key?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'msg_id'?: string;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ListMessagesForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListMessagesForRocketMqRequest {
        this['topic'] = topic;
        return this;
    }
    public withQueue(queue: string): ListMessagesForRocketMqRequest {
        this['queue'] = queue;
        return this;
    }
    public withLimit(limit: number): ListMessagesForRocketMqRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMessagesForRocketMqRequest {
        this['offset'] = offset;
        return this;
    }
    public withKey(key: string): ListMessagesForRocketMqRequest {
        this['key'] = key;
        return this;
    }
    public withStartTime(startTime: string): ListMessagesForRocketMqRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMessagesForRocketMqRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMsgId(msgId: string): ListMessagesForRocketMqRequest {
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


export class DeadLetterQueue {
    public type?: DeadLetterQueueTypeEnum | string;
    private 'instance_id'?: string;
    private 'connection_id'?: string;
    public topic?: string;
    public constructor(type?: string, instanceId?: string, connectionId?: string, topic?: string) { 
        this['type'] = type;
        this['instance_id'] = instanceId;
        this['connection_id'] = connectionId;
        this['topic'] = topic;
    }
    public withType(type: DeadLetterQueueTypeEnum | string): DeadLetterQueue {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): DeadLetterQueue {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConnectionId(connectionId: string): DeadLetterQueue {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withTopic(topic: string): DeadLetterQueue {
        this['topic'] = topic;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeadLetterQueueTypeEnum {
    KAFKA = 'KAFKA'
}

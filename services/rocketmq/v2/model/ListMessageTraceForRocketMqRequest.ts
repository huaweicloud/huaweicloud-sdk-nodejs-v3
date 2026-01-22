

export class ListMessageTraceForRocketMqRequest {
    private 'instance_id'?: string;
    private 'msg_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string, msgId?: string) { 
        this['instance_id'] = instanceId;
        this['msg_id'] = msgId;
    }
    public withInstanceId(instanceId: string): ListMessageTraceForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMsgId(msgId: string): ListMessageTraceForRocketMqRequest {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
    public withLimit(limit: number): ListMessageTraceForRocketMqRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMessageTraceForRocketMqRequest {
        this['offset'] = offset;
        return this;
    }
}
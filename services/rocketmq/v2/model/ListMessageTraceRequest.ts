

export class ListMessageTraceRequest {
    public engine?: ListMessageTraceRequestEngineEnum | string;
    private 'instance_id'?: string;
    private 'msg_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(engine?: string, instanceId?: string, msgId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['msg_id'] = msgId;
    }
    public withEngine(engine: ListMessageTraceRequestEngineEnum | string): ListMessageTraceRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListMessageTraceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMsgId(msgId: string): ListMessageTraceRequest {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
    public withLimit(limit: number): ListMessageTraceRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListMessageTraceRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMessageTraceRequestEngineEnum {
    RELIABILITY = 'reliability'
}

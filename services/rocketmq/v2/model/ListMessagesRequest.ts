

export class ListMessagesRequest {
    public engine: ListMessagesRequestEngineEnum;
    private 'instance_id': string | undefined;
    public topic: string;
    public limit?: string;
    public offset?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'msg_id'?: string | undefined;
    public constructor(engine?: any, instanceId?: any, topic?: any) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withEngine(engine: ListMessagesRequestEngineEnum): ListMessagesRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListMessagesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListMessagesRequest {
        this['topic'] = topic;
        return this;
    }
    public withLimit(limit: string): ListMessagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListMessagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListMessagesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMessagesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withMsgId(msgId: string): ListMessagesRequest {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId() {
        return this['msg_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMessagesRequestEngineEnum {
    RELIABILITY = 'reliability'
}

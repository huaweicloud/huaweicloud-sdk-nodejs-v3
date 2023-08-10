

export class CreateTopicReq {
    public name?: string;
    public brokers?: Array<string>;
    private 'queue_num'?: number;
    public permission?: CreateTopicReqPermissionEnum | string;
    private 'message_type'?: CreateTopicReqMessageTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): CreateTopicReq {
        this['name'] = name;
        return this;
    }
    public withBrokers(brokers: Array<string>): CreateTopicReq {
        this['brokers'] = brokers;
        return this;
    }
    public withQueueNum(queueNum: number): CreateTopicReq {
        this['queue_num'] = queueNum;
        return this;
    }
    public set queueNum(queueNum: number  | undefined) {
        this['queue_num'] = queueNum;
    }
    public get queueNum(): number | undefined {
        return this['queue_num'];
    }
    public withPermission(permission: CreateTopicReqPermissionEnum | string): CreateTopicReq {
        this['permission'] = permission;
        return this;
    }
    public withMessageType(messageType: CreateTopicReqMessageTypeEnum | string): CreateTopicReq {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: CreateTopicReqMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): CreateTopicReqMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTopicReqPermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTopicReqMessageTypeEnum {
    NORMAL = 'NORMAL',
    FIFO = 'FIFO',
    DELAY = 'DELAY',
    TRANSACTION = 'TRANSACTION'
}

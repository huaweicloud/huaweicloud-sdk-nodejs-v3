import { BatchDeleteTopicReq } from './BatchDeleteTopicReq';
import { CreateTopicReq } from './CreateTopicReq';


export class CreateTopicOrBatchDeleteTopicReq {
    public name?: string;
    public brokers?: Array<string>;
    private 'queue_num'?: number;
    public permission?: CreateTopicOrBatchDeleteTopicReqPermissionEnum | string;
    private 'message_type'?: CreateTopicOrBatchDeleteTopicReqMessageTypeEnum | string;
    public topics?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): CreateTopicOrBatchDeleteTopicReq {
        this['name'] = name;
        return this;
    }
    public withBrokers(brokers: Array<string>): CreateTopicOrBatchDeleteTopicReq {
        this['brokers'] = brokers;
        return this;
    }
    public withQueueNum(queueNum: number): CreateTopicOrBatchDeleteTopicReq {
        this['queue_num'] = queueNum;
        return this;
    }
    public set queueNum(queueNum: number  | undefined) {
        this['queue_num'] = queueNum;
    }
    public get queueNum(): number | undefined {
        return this['queue_num'];
    }
    public withPermission(permission: CreateTopicOrBatchDeleteTopicReqPermissionEnum | string): CreateTopicOrBatchDeleteTopicReq {
        this['permission'] = permission;
        return this;
    }
    public withMessageType(messageType: CreateTopicOrBatchDeleteTopicReqMessageTypeEnum | string): CreateTopicOrBatchDeleteTopicReq {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: CreateTopicOrBatchDeleteTopicReqMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): CreateTopicOrBatchDeleteTopicReqMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
    public withTopics(topics: Array<string>): CreateTopicOrBatchDeleteTopicReq {
        this['topics'] = topics;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTopicOrBatchDeleteTopicReqPermissionEnum {
    SUB = 'sub',
    PUB = 'pub',
    ALL = 'all'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTopicOrBatchDeleteTopicReqMessageTypeEnum {
    NORMAL = 'NORMAL',
    FIFO = 'FIFO',
    DELAY = 'DELAY',
    TRANSACTION = 'TRANSACTION'
}

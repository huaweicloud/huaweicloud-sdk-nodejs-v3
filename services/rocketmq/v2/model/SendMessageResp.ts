import { SendMessageProperties } from './SendMessageProperties';


export class SendMessageResp {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<SendMessageProperties>;
    private 'msg_id'?: string;
    private 'queue_id'?: number;
    private 'queue_offset'?: number;
    private 'broker_name'?: string;
    public constructor() { 
    }
    public withTopic(topic: string): SendMessageResp {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendMessageResp {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<SendMessageProperties>): SendMessageResp {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<SendMessageProperties>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<SendMessageProperties> | undefined {
        return this['property_list'];
    }
    public withMsgId(msgId: string): SendMessageResp {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
    public withQueueId(queueId: number): SendMessageResp {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueOffset(queueOffset: number): SendMessageResp {
        this['queue_offset'] = queueOffset;
        return this;
    }
    public set queueOffset(queueOffset: number  | undefined) {
        this['queue_offset'] = queueOffset;
    }
    public get queueOffset(): number | undefined {
        return this['queue_offset'];
    }
    public withBrokerName(brokerName: string): SendMessageResp {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
}
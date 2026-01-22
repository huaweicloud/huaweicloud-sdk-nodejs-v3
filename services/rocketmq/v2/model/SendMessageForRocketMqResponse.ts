import { SendMessageProperties } from './SendMessageProperties';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendMessageForRocketMqResponse extends SdkResponse {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<SendMessageProperties>;
    private 'msg_id'?: string;
    private 'queue_id'?: number;
    private 'queue_offset'?: number;
    private 'broker_name'?: string;
    public constructor() { 
        super();
    }
    public withTopic(topic: string): SendMessageForRocketMqResponse {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendMessageForRocketMqResponse {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<SendMessageProperties>): SendMessageForRocketMqResponse {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<SendMessageProperties>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<SendMessageProperties> | undefined {
        return this['property_list'];
    }
    public withMsgId(msgId: string): SendMessageForRocketMqResponse {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
    public withQueueId(queueId: number): SendMessageForRocketMqResponse {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueOffset(queueOffset: number): SendMessageForRocketMqResponse {
        this['queue_offset'] = queueOffset;
        return this;
    }
    public set queueOffset(queueOffset: number  | undefined) {
        this['queue_offset'] = queueOffset;
    }
    public get queueOffset(): number | undefined {
        return this['queue_offset'];
    }
    public withBrokerName(brokerName: string): SendMessageForRocketMqResponse {
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
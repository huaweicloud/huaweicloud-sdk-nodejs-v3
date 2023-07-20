import { MessagePropertyList } from './MessagePropertyList';


export class Message {
    private 'msg_id'?: string;
    private 'instance_id'?: string;
    public topic?: string;
    private 'store_timestamp'?: number;
    private 'born_timestamp'?: number;
    private 'reconsume_times'?: string;
    public body?: string;
    private 'body_crc'?: number;
    private 'store_size'?: number;
    private 'property_list'?: Array<MessagePropertyList>;
    private 'born_host'?: string;
    private 'store_host'?: string;
    private 'queue_id'?: string;
    private 'queue_offset'?: string;
    public constructor() { 
    }
    public withMsgId(msgId: string): Message {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string  | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId(): string | undefined {
        return this['msg_id'];
    }
    public withInstanceId(instanceId: string): Message {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): Message {
        this['topic'] = topic;
        return this;
    }
    public withStoreTimestamp(storeTimestamp: number): Message {
        this['store_timestamp'] = storeTimestamp;
        return this;
    }
    public set storeTimestamp(storeTimestamp: number  | undefined) {
        this['store_timestamp'] = storeTimestamp;
    }
    public get storeTimestamp(): number | undefined {
        return this['store_timestamp'];
    }
    public withBornTimestamp(bornTimestamp: number): Message {
        this['born_timestamp'] = bornTimestamp;
        return this;
    }
    public set bornTimestamp(bornTimestamp: number  | undefined) {
        this['born_timestamp'] = bornTimestamp;
    }
    public get bornTimestamp(): number | undefined {
        return this['born_timestamp'];
    }
    public withReconsumeTimes(reconsumeTimes: string): Message {
        this['reconsume_times'] = reconsumeTimes;
        return this;
    }
    public set reconsumeTimes(reconsumeTimes: string  | undefined) {
        this['reconsume_times'] = reconsumeTimes;
    }
    public get reconsumeTimes(): string | undefined {
        return this['reconsume_times'];
    }
    public withBody(body: string): Message {
        this['body'] = body;
        return this;
    }
    public withBodyCrc(bodyCrc: number): Message {
        this['body_crc'] = bodyCrc;
        return this;
    }
    public set bodyCrc(bodyCrc: number  | undefined) {
        this['body_crc'] = bodyCrc;
    }
    public get bodyCrc(): number | undefined {
        return this['body_crc'];
    }
    public withStoreSize(storeSize: number): Message {
        this['store_size'] = storeSize;
        return this;
    }
    public set storeSize(storeSize: number  | undefined) {
        this['store_size'] = storeSize;
    }
    public get storeSize(): number | undefined {
        return this['store_size'];
    }
    public withPropertyList(propertyList: Array<MessagePropertyList>): Message {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<MessagePropertyList>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<MessagePropertyList> | undefined {
        return this['property_list'];
    }
    public withBornHost(bornHost: string): Message {
        this['born_host'] = bornHost;
        return this;
    }
    public set bornHost(bornHost: string  | undefined) {
        this['born_host'] = bornHost;
    }
    public get bornHost(): string | undefined {
        return this['born_host'];
    }
    public withStoreHost(storeHost: string): Message {
        this['store_host'] = storeHost;
        return this;
    }
    public set storeHost(storeHost: string  | undefined) {
        this['store_host'] = storeHost;
    }
    public get storeHost(): string | undefined {
        return this['store_host'];
    }
    public withQueueId(queueId: string): Message {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): string | undefined {
        return this['queue_id'];
    }
    public withQueueOffset(queueOffset: string): Message {
        this['queue_offset'] = queueOffset;
        return this;
    }
    public set queueOffset(queueOffset: string  | undefined) {
        this['queue_offset'] = queueOffset;
    }
    public get queueOffset(): string | undefined {
        return this['queue_offset'];
    }
}
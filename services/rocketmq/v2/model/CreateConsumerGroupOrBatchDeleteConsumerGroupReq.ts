import { BatchDeleteConsumerGroupReq } from './BatchDeleteConsumerGroupReq';
import { ConsumerGroup } from './ConsumerGroup';


export class CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
    public groups?: Array<string>;
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'group_desc'?: string;
    private 'retry_max_time'?: number;
    public createdAt?: string;
    public permissions?: Array<string>;
    private 'consume_orderly'?: boolean;
    public constructor() { 
    }
    public withGroups(groups: Array<string>): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['groups'] = groups;
        return this;
    }
    public withEnabled(enabled: boolean): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['enabled'] = enabled;
        return this;
    }
    public withBroadcast(broadcast: boolean): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['broadcast'] = broadcast;
        return this;
    }
    public withBrokers(brokers: Array<string>): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['brokers'] = brokers;
        return this;
    }
    public withName(name: string): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['name'] = name;
        return this;
    }
    public withGroupDesc(groupDesc: string): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withRetryMaxTime(retryMaxTime: number): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withCreatedAt(createdAt: string): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['createdAt'] = createdAt;
        return this;
    }
    public withPermissions(permissions: Array<string>): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['permissions'] = permissions;
        return this;
    }
    public withConsumeOrderly(consumeOrderly: boolean): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['consume_orderly'] = consumeOrderly;
        return this;
    }
    public set consumeOrderly(consumeOrderly: boolean  | undefined) {
        this['consume_orderly'] = consumeOrderly;
    }
    public get consumeOrderly(): boolean | undefined {
        return this['consume_orderly'];
    }
}
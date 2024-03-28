

export class CreateOrUpdateConsumerGroup {
    public name?: string;
    public brokers?: Array<string>;
    public broadcast?: boolean;
    private 'retry_max_time'?: number;
    public enabled?: boolean;
    private 'consume_orderly'?: boolean;
    private 'group_desc'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateOrUpdateConsumerGroup {
        this['name'] = name;
        return this;
    }
    public withBrokers(brokers: Array<string>): CreateOrUpdateConsumerGroup {
        this['brokers'] = brokers;
        return this;
    }
    public withBroadcast(broadcast: boolean): CreateOrUpdateConsumerGroup {
        this['broadcast'] = broadcast;
        return this;
    }
    public withRetryMaxTime(retryMaxTime: number): CreateOrUpdateConsumerGroup {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withEnabled(enabled: boolean): CreateOrUpdateConsumerGroup {
        this['enabled'] = enabled;
        return this;
    }
    public withConsumeOrderly(consumeOrderly: boolean): CreateOrUpdateConsumerGroup {
        this['consume_orderly'] = consumeOrderly;
        return this;
    }
    public set consumeOrderly(consumeOrderly: boolean  | undefined) {
        this['consume_orderly'] = consumeOrderly;
    }
    public get consumeOrderly(): boolean | undefined {
        return this['consume_orderly'];
    }
    public withGroupDesc(groupDesc: string): CreateOrUpdateConsumerGroup {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
}
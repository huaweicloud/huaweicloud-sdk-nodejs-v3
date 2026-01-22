

export class BatchUpdateConsumerGroup {
    public name?: string;
    public broadcast?: boolean;
    private 'retry_max_time'?: number;
    public enabled?: boolean;
    private 'consume_orderly'?: boolean;
    private 'group_desc'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BatchUpdateConsumerGroup {
        this['name'] = name;
        return this;
    }
    public withBroadcast(broadcast: boolean): BatchUpdateConsumerGroup {
        this['broadcast'] = broadcast;
        return this;
    }
    public withRetryMaxTime(retryMaxTime: number): BatchUpdateConsumerGroup {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withEnabled(enabled: boolean): BatchUpdateConsumerGroup {
        this['enabled'] = enabled;
        return this;
    }
    public withConsumeOrderly(consumeOrderly: boolean): BatchUpdateConsumerGroup {
        this['consume_orderly'] = consumeOrderly;
        return this;
    }
    public set consumeOrderly(consumeOrderly: boolean  | undefined) {
        this['consume_orderly'] = consumeOrderly;
    }
    public get consumeOrderly(): boolean | undefined {
        return this['consume_orderly'];
    }
    public withGroupDesc(groupDesc: string): BatchUpdateConsumerGroup {
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
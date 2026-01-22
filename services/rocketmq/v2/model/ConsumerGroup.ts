

export class ConsumerGroup {
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'group_desc'?: string;
    private 'retry_max_time'?: number;
    private 'created_at'?: number;
    public permissions?: Array<string>;
    private 'consume_orderly'?: boolean;
    private 'group_online'?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): ConsumerGroup {
        this['enabled'] = enabled;
        return this;
    }
    public withBroadcast(broadcast: boolean): ConsumerGroup {
        this['broadcast'] = broadcast;
        return this;
    }
    public withBrokers(brokers: Array<string>): ConsumerGroup {
        this['brokers'] = brokers;
        return this;
    }
    public withName(name: string): ConsumerGroup {
        this['name'] = name;
        return this;
    }
    public withGroupDesc(groupDesc: string): ConsumerGroup {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
    public withRetryMaxTime(retryMaxTime: number): ConsumerGroup {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withCreatedAt(createdAt: number): ConsumerGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withPermissions(permissions: Array<string>): ConsumerGroup {
        this['permissions'] = permissions;
        return this;
    }
    public withConsumeOrderly(consumeOrderly: boolean): ConsumerGroup {
        this['consume_orderly'] = consumeOrderly;
        return this;
    }
    public set consumeOrderly(consumeOrderly: boolean  | undefined) {
        this['consume_orderly'] = consumeOrderly;
    }
    public get consumeOrderly(): boolean | undefined {
        return this['consume_orderly'];
    }
    public withGroupOnline(groupOnline: boolean): ConsumerGroup {
        this['group_online'] = groupOnline;
        return this;
    }
    public set groupOnline(groupOnline: boolean  | undefined) {
        this['group_online'] = groupOnline;
    }
    public get groupOnline(): boolean | undefined {
        return this['group_online'];
    }
}
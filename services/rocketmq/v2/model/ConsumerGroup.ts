

export class ConsumerGroup {
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'group_desc'?: string;
    private 'retry_max_time'?: number;
    private 'from_beginning'?: boolean;
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
    public withFromBeginning(fromBeginning: boolean): ConsumerGroup {
        this['from_beginning'] = fromBeginning;
        return this;
    }
    public set fromBeginning(fromBeginning: boolean  | undefined) {
        this['from_beginning'] = fromBeginning;
    }
    public get fromBeginning(): boolean | undefined {
        return this['from_beginning'];
    }
}
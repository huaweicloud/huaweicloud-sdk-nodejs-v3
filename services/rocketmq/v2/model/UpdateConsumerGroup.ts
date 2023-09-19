

export class UpdateConsumerGroup {
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'retry_max_time'?: number;
    private 'from_beginning'?: boolean;
    public constructor(enabled?: boolean, broadcast?: boolean, retryMaxTime?: number) { 
        this['enabled'] = enabled;
        this['broadcast'] = broadcast;
        this['retry_max_time'] = retryMaxTime;
    }
    public withEnabled(enabled: boolean): UpdateConsumerGroup {
        this['enabled'] = enabled;
        return this;
    }
    public withBroadcast(broadcast: boolean): UpdateConsumerGroup {
        this['broadcast'] = broadcast;
        return this;
    }
    public withBrokers(brokers: Array<string>): UpdateConsumerGroup {
        this['brokers'] = brokers;
        return this;
    }
    public withName(name: string): UpdateConsumerGroup {
        this['name'] = name;
        return this;
    }
    public withRetryMaxTime(retryMaxTime: number): UpdateConsumerGroup {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withFromBeginning(fromBeginning: boolean): UpdateConsumerGroup {
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
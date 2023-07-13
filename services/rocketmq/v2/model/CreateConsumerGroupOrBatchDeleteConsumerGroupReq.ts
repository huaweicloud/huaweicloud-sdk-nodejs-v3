import { BatchDeleteConsumerGroupReq } from './BatchDeleteConsumerGroupReq';
import { ConsumerGroup } from './ConsumerGroup';


export class CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
    public groups?: Array<string>;
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'retry_max_time'?: number | undefined;
    private 'from_beginning'?: boolean | undefined;
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
    public withRetryMaxTime(retryMaxTime: number): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime() {
        return this['retry_max_time'];
    }
    public withFromBeginning(fromBeginning: boolean): CreateConsumerGroupOrBatchDeleteConsumerGroupReq {
        this['from_beginning'] = fromBeginning;
        return this;
    }
    public set fromBeginning(fromBeginning: boolean | undefined) {
        this['from_beginning'] = fromBeginning;
    }
    public get fromBeginning() {
        return this['from_beginning'];
    }
}
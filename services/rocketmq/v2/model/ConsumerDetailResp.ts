import { Brokers } from './Brokers';


export class ConsumerDetailResp {
    public lag?: number;
    private 'max_offset'?: number;
    private 'consumer_offset'?: number;
    public brokers?: Array<Brokers>;
    public constructor() { 
    }
    public withLag(lag: number): ConsumerDetailResp {
        this['lag'] = lag;
        return this;
    }
    public withMaxOffset(maxOffset: number): ConsumerDetailResp {
        this['max_offset'] = maxOffset;
        return this;
    }
    public set maxOffset(maxOffset: number  | undefined) {
        this['max_offset'] = maxOffset;
    }
    public get maxOffset(): number | undefined {
        return this['max_offset'];
    }
    public withConsumerOffset(consumerOffset: number): ConsumerDetailResp {
        this['consumer_offset'] = consumerOffset;
        return this;
    }
    public set consumerOffset(consumerOffset: number  | undefined) {
        this['consumer_offset'] = consumerOffset;
    }
    public get consumerOffset(): number | undefined {
        return this['consumer_offset'];
    }
    public withBrokers(brokers: Array<Brokers>): ConsumerDetailResp {
        this['brokers'] = brokers;
        return this;
    }
}
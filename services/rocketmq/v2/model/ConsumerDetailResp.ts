import { Brokers } from './Brokers';


export class ConsumerDetailResp {
    public brokers?: Array<Brokers>;
    public constructor() { 
    }
    public withBrokers(brokers: Array<Brokers>): ConsumerDetailResp {
        this['brokers'] = brokers;
        return this;
    }
}
import { Queue } from './Queue';


export class Brokers {
    private 'broker_name'?: string;
    public queues?: Array<Queue>;
    public constructor() { 
    }
    public withBrokerName(brokerName: string): Brokers {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
    public withQueues(queues: Array<Queue>): Brokers {
        this['queues'] = queues;
        return this;
    }
}
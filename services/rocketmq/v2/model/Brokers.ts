import { Queue } from './Queue';


export class Brokers {
    private 'broker_name'?: string | undefined;
    public queues?: Array<Queue>;
    public constructor() { 
    }
    public withBrokerName(brokerName: string): Brokers {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName() {
        return this['broker_name'];
    }
    public withQueues(queues: Array<Queue>): Brokers {
        this['queues'] = queues;
        return this;
    }
}
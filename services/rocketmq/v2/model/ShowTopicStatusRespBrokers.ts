import { ShowTopicStatusRespQueues } from './ShowTopicStatusRespQueues';


export class ShowTopicStatusRespBrokers {
    public queues?: Array<ShowTopicStatusRespQueues>;
    private 'broker_name'?: string;
    public constructor() { 
    }
    public withQueues(queues: Array<ShowTopicStatusRespQueues>): ShowTopicStatusRespBrokers {
        this['queues'] = queues;
        return this;
    }
    public withBrokerName(brokerName: string): ShowTopicStatusRespBrokers {
        this['broker_name'] = brokerName;
        return this;
    }
    public set brokerName(brokerName: string  | undefined) {
        this['broker_name'] = brokerName;
    }
    public get brokerName(): string | undefined {
        return this['broker_name'];
    }
}
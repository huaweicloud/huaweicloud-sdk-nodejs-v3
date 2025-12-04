import { ShowKakfaClusterResponseClusterBrokers } from './ShowKakfaClusterResponseClusterBrokers';


export class ShowKakfaClusterResponseCluster {
    public brokers?: Array<ShowKakfaClusterResponseClusterBrokers>;
    public constructor() { 
    }
    public withBrokers(brokers: Array<ShowKakfaClusterResponseClusterBrokers>): ShowKakfaClusterResponseCluster {
        this['brokers'] = brokers;
        return this;
    }
}
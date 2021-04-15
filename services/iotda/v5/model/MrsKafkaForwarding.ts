import { NetAddress } from './NetAddress';


export class MrsKafkaForwarding {
    public addresses: Array<NetAddress>;
    public topic: string;
    public constructor(addresses?: any, topic?: any) { 
        this['addresses'] = addresses;
        this['topic'] = topic;
    }
    public withAddresses(addresses: Array<NetAddress>): MrsKafkaForwarding {
        this['addresses'] = addresses;
        return this;
    }
    public withTopic(topic: string): MrsKafkaForwarding {
        this['topic'] = topic;
        return this;
    }
}
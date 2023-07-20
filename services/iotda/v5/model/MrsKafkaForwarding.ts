import { NetAddress } from './NetAddress';


export class MrsKafkaForwarding {
    public addresses?: Array<NetAddress>;
    public topic?: string;
    private 'kerberos_authentication'?: boolean;
    public constructor(addresses?: Array<NetAddress>, topic?: string) { 
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
    public withKerberosAuthentication(kerberosAuthentication: boolean): MrsKafkaForwarding {
        this['kerberos_authentication'] = kerberosAuthentication;
        return this;
    }
    public set kerberosAuthentication(kerberosAuthentication: boolean  | undefined) {
        this['kerberos_authentication'] = kerberosAuthentication;
    }
    public get kerberosAuthentication(): boolean | undefined {
        return this['kerberos_authentication'];
    }
}
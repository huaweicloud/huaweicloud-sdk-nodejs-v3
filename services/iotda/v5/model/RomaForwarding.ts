import { NetAddress } from './NetAddress';


export class RomaForwarding {
    public addresses?: Array<NetAddress>;
    public topic?: string;
    public username?: string;
    public password?: string;
    public constructor(addresses?: Array<NetAddress>, topic?: string, username?: string, password?: string) { 
        this['addresses'] = addresses;
        this['topic'] = topic;
        this['username'] = username;
        this['password'] = password;
    }
    public withAddresses(addresses: Array<NetAddress>): RomaForwarding {
        this['addresses'] = addresses;
        return this;
    }
    public withTopic(topic: string): RomaForwarding {
        this['topic'] = topic;
        return this;
    }
    public withUsername(username: string): RomaForwarding {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RomaForwarding {
        this['password'] = password;
        return this;
    }
}
import { NetAddress } from './NetAddress';


export class DmsRocketMQForwarding {
    public addresses?: Array<NetAddress>;
    public topic?: string;
    public username?: string;
    public password?: string;
    private 'enable_ssl'?: boolean;
    public constructor(addresses?: Array<NetAddress>, topic?: string, username?: string, password?: string) { 
        this['addresses'] = addresses;
        this['topic'] = topic;
        this['username'] = username;
        this['password'] = password;
    }
    public withAddresses(addresses: Array<NetAddress>): DmsRocketMQForwarding {
        this['addresses'] = addresses;
        return this;
    }
    public withTopic(topic: string): DmsRocketMQForwarding {
        this['topic'] = topic;
        return this;
    }
    public withUsername(username: string): DmsRocketMQForwarding {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): DmsRocketMQForwarding {
        this['password'] = password;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): DmsRocketMQForwarding {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
}
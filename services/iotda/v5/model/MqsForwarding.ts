

export class MqsForwarding {
    public url: string;
    private 'user_name': string | undefined;
    public password: string;
    public topic: string;
    private 'encrypt_transport'?: boolean | undefined;
    public constructor(url?: any, userName?: any, password?: any, topic?: any) { 
        this['url'] = url;
        this['user_name'] = userName;
        this['password'] = password;
        this['topic'] = topic;
    }
    public withUrl(url: string): MqsForwarding {
        this['url'] = url;
        return this;
    }
    public withUserName(userName: string): MqsForwarding {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withPassword(password: string): MqsForwarding {
        this['password'] = password;
        return this;
    }
    public withTopic(topic: string): MqsForwarding {
        this['topic'] = topic;
        return this;
    }
    public withEncryptTransport(encryptTransport: boolean): MqsForwarding {
        this['encrypt_transport'] = encryptTransport;
        return this;
    }
    public set encryptTransport(encryptTransport: boolean | undefined) {
        this['encrypt_transport'] = encryptTransport;
    }
    public get encryptTransport() {
        return this['encrypt_transport'];
    }
}
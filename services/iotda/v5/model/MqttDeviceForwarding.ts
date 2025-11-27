

export class MqttDeviceForwarding {
    public topic?: string;
    public ttl?: number;
    public constructor(topic?: string) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): MqttDeviceForwarding {
        this['topic'] = topic;
        return this;
    }
    public withTtl(ttl: number): MqttDeviceForwarding {
        this['ttl'] = ttl;
        return this;
    }
}
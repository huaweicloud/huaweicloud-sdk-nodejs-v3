

export class MqttForwarding {
    public topic: string;
    public constructor(topic: any) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): MqttForwarding {
        this['topic'] = topic;
        return this;
    }
}
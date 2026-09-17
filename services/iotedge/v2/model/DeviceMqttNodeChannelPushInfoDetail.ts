

export class DeviceMqttNodeChannelPushInfoDetail {
    public topic?: string;
    public qos?: number;
    public constructor() { 
    }
    public withTopic(topic: string): DeviceMqttNodeChannelPushInfoDetail {
        this['topic'] = topic;
        return this;
    }
    public withQos(qos: number): DeviceMqttNodeChannelPushInfoDetail {
        this['qos'] = qos;
        return this;
    }
}


export class DeviceMqttPushInfoDetail {
    public topic?: string;
    public format?: string;
    public qos?: number;
    public constructor() { 
    }
    public withTopic(topic: string): DeviceMqttPushInfoDetail {
        this['topic'] = topic;
        return this;
    }
    public withFormat(format: string): DeviceMqttPushInfoDetail {
        this['format'] = format;
        return this;
    }
    public withQos(qos: number): DeviceMqttPushInfoDetail {
        this['qos'] = qos;
        return this;
    }
}


export class DeviceMqttPushInfo {
    public topic?: string;
    public format?: string;
    public qos?: number;
    public constructor(topic?: string) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): DeviceMqttPushInfo {
        this['topic'] = topic;
        return this;
    }
    public withFormat(format: string): DeviceMqttPushInfo {
        this['format'] = format;
        return this;
    }
    public withQos(qos: number): DeviceMqttPushInfo {
        this['qos'] = qos;
        return this;
    }
}
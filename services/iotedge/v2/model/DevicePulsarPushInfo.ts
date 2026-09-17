

export class DevicePulsarPushInfo {
    public topic?: string;
    public constructor(topic?: string) { 
        this['topic'] = topic;
    }
    public withTopic(topic: string): DevicePulsarPushInfo {
        this['topic'] = topic;
        return this;
    }
}
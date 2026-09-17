

export class DevicePulsarPushInfoDetail {
    public topic?: string;
    public constructor() { 
    }
    public withTopic(topic: string): DevicePulsarPushInfoDetail {
        this['topic'] = topic;
        return this;
    }
}
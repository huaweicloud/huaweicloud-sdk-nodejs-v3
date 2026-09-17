

export class DevicePulsarNodeChannelPushInfoDetail {
    public topic?: string;
    public constructor() { 
    }
    public withTopic(topic: string): DevicePulsarNodeChannelPushInfoDetail {
        this['topic'] = topic;
        return this;
    }
}
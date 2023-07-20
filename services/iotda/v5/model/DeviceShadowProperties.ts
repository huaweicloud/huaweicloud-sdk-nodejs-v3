

export class DeviceShadowProperties {
    public properties?: object;
    private 'event_time'?: string;
    public constructor() { 
    }
    public withProperties(properties: object): DeviceShadowProperties {
        this['properties'] = properties;
        return this;
    }
    public withEventTime(eventTime: string): DeviceShadowProperties {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: string  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): string | undefined {
        return this['event_time'];
    }
}


export class WebHookEventCfgDto {
    private 'event_type'?: string;
    public cfgs?: string;
    public constructor() { 
    }
    public withEventType(eventType: string): WebHookEventCfgDto {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withCfgs(cfgs: string): WebHookEventCfgDto {
        this['cfgs'] = cfgs;
        return this;
    }
}
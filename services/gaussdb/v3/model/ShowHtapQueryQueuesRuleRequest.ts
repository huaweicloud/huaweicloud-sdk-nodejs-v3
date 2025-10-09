

export class ShowHtapQueryQueuesRuleRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public constructor(xLanguage?: string, instanceId?: string) { 
        this['X-Language'] = xLanguage;
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ShowHtapQueryQueuesRuleRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowHtapQueryQueuesRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}
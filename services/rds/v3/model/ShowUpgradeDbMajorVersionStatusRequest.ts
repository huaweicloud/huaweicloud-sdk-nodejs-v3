

export class ShowUpgradeDbMajorVersionStatusRequest {
    private 'instance_id'?: string;
    public action?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, action?: string) { 
        this['instance_id'] = instanceId;
        this['action'] = action;
    }
    public withInstanceId(instanceId: string): ShowUpgradeDbMajorVersionStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAction(action: string): ShowUpgradeDbMajorVersionStatusRequest {
        this['action'] = action;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowUpgradeDbMajorVersionStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}


export class ShowDetailsOfAppCodeV2Request {
    private 'instance_id'?: string;
    private 'app_id'?: string;
    private 'app_code_id'?: string;
    public constructor(instanceId?: string, appId?: string, appCodeId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
        this['app_code_id'] = appCodeId;
    }
    public withInstanceId(instanceId: string): ShowDetailsOfAppCodeV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): ShowDetailsOfAppCodeV2Request {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppCodeId(appCodeId: string): ShowDetailsOfAppCodeV2Request {
        this['app_code_id'] = appCodeId;
        return this;
    }
    public set appCodeId(appCodeId: string  | undefined) {
        this['app_code_id'] = appCodeId;
    }
    public get appCodeId(): string | undefined {
        return this['app_code_id'];
    }
}
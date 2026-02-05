

export class ListAiApiKeysRequest {
    private 'instance_id'?: string;
    private 'app_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, appId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): ListAiApiKeysRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): ListAiApiKeysRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withOffset(offset: number): ListAiApiKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAiApiKeysRequest {
        this['limit'] = limit;
        return this;
    }
}
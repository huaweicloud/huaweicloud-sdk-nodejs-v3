

export class DeleteAiAppRequest {
    private 'app_id'?: string;
    private 'keep_policy'?: boolean;
    public constructor(appId?: string, keepPolicy?: boolean) { 
        this['app_id'] = appId;
        this['keep_policy'] = keepPolicy;
    }
    public withAppId(appId: string): DeleteAiAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withKeepPolicy(keepPolicy: boolean): DeleteAiAppRequest {
        this['keep_policy'] = keepPolicy;
        return this;
    }
    public set keepPolicy(keepPolicy: boolean  | undefined) {
        this['keep_policy'] = keepPolicy;
    }
    public get keepPolicy(): boolean | undefined {
        return this['keep_policy'];
    }
}
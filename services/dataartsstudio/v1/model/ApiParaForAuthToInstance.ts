

export class ApiParaForAuthToInstance {
    private 'api_id'?: string;
    private 'instance_id'?: string;
    private 'app_id'?: string;
    private 'apply_type'?: ApiParaForAuthToInstanceApplyTypeEnum | string;
    public time?: string;
    public constructor() { 
    }
    public withApiId(apiId: string): ApiParaForAuthToInstance {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): ApiParaForAuthToInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): ApiParaForAuthToInstance {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withApplyType(applyType: ApiParaForAuthToInstanceApplyTypeEnum | string): ApiParaForAuthToInstance {
        this['apply_type'] = applyType;
        return this;
    }
    public set applyType(applyType: ApiParaForAuthToInstanceApplyTypeEnum | string  | undefined) {
        this['apply_type'] = applyType;
    }
    public get applyType(): ApiParaForAuthToInstanceApplyTypeEnum | string | undefined {
        return this['apply_type'];
    }
    public withTime(time: string): ApiParaForAuthToInstance {
        this['time'] = time;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiParaForAuthToInstanceApplyTypeEnum {
    APPLY_TYPE_AUTHORIZE = 'APPLY_TYPE_AUTHORIZE',
    APPLY_TYPE_API_CANCEL_AUTHORIZE = 'APPLY_TYPE_API_CANCEL_AUTHORIZE',
    APPLY_TYPE_APP_CANCEL_AUTHORIZE = 'APPLY_TYPE_APP_CANCEL_AUTHORIZE',
    APPLY_TYPE_APPLY = 'APPLY_TYPE_APPLY',
    APPLY_TYPE_RENEW = 'APPLY_TYPE_RENEW'
}

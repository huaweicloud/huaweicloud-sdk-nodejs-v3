

export class ApiActionInfo {
    public action?: ApiActionInfoActionEnum | string;
    private 'env_id'?: string;
    private 'api_id'?: string;
    public remark?: string;
    public constructor(action?: string, envId?: string, apiId?: string) { 
        this['action'] = action;
        this['env_id'] = envId;
        this['api_id'] = apiId;
    }
    public withAction(action: ApiActionInfoActionEnum | string): ApiActionInfo {
        this['action'] = action;
        return this;
    }
    public withEnvId(envId: string): ApiActionInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiId(apiId: string): ApiActionInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withRemark(remark: string): ApiActionInfo {
        this['remark'] = remark;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiActionInfoActionEnum {
    ONLINE = 'online',
    OFFLINE = 'offline'
}

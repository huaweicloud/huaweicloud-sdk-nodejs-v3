

export class ApiAuthCreate {
    private 'env_id'?: string;
    private 'app_ids'?: Array<string>;
    private 'api_ids'?: Array<string>;
    public constructor(envId?: string, appIds?: Array<string>, apiIds?: Array<string>) { 
        this['env_id'] = envId;
        this['app_ids'] = appIds;
        this['api_ids'] = apiIds;
    }
    public withEnvId(envId: string): ApiAuthCreate {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withAppIds(appIds: Array<string>): ApiAuthCreate {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
    public withApiIds(apiIds: Array<string>): ApiAuthCreate {
        this['api_ids'] = apiIds;
        return this;
    }
    public set apiIds(apiIds: Array<string>  | undefined) {
        this['api_ids'] = apiIds;
    }
    public get apiIds(): Array<string> | undefined {
        return this['api_ids'];
    }
}
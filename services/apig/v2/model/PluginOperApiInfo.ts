

export class PluginOperApiInfo {
    private 'env_id'?: string;
    private 'api_ids'?: Array<string>;
    public constructor(envId?: string, apiIds?: Array<string>) { 
        this['env_id'] = envId;
        this['api_ids'] = apiIds;
    }
    public withEnvId(envId: string): PluginOperApiInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiIds(apiIds: Array<string>): PluginOperApiInfo {
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
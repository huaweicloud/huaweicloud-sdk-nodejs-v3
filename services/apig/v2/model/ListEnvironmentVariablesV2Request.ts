

export class ListEnvironmentVariablesV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'group_id'?: string;
    private 'env_id'?: string;
    private 'variable_name'?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string, groupId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): ListEnvironmentVariablesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListEnvironmentVariablesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnvironmentVariablesV2Request {
        this['limit'] = limit;
        return this;
    }
    public withGroupId(groupId: string): ListEnvironmentVariablesV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withEnvId(envId: string): ListEnvironmentVariablesV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withVariableName(variableName: string): ListEnvironmentVariablesV2Request {
        this['variable_name'] = variableName;
        return this;
    }
    public set variableName(variableName: string  | undefined) {
        this['variable_name'] = variableName;
    }
    public get variableName(): string | undefined {
        return this['variable_name'];
    }
    public withPreciseSearch(preciseSearch: string): ListEnvironmentVariablesV2Request {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
}
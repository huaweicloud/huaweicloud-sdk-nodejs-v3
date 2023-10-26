

export class ShowEnvByNameRequest {
    private 'environment_name'?: string;
    public region?: string;
    private 'component_id'?: string;
    public constructor(environmentName?: string, region?: string, componentId?: string) { 
        this['environment_name'] = environmentName;
        this['region'] = region;
        this['component_id'] = componentId;
    }
    public withEnvironmentName(environmentName: string): ShowEnvByNameRequest {
        this['environment_name'] = environmentName;
        return this;
    }
    public set environmentName(environmentName: string  | undefined) {
        this['environment_name'] = environmentName;
    }
    public get environmentName(): string | undefined {
        return this['environment_name'];
    }
    public withRegion(region: string): ShowEnvByNameRequest {
        this['region'] = region;
        return this;
    }
    public withComponentId(componentId: string): ShowEnvByNameRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
}
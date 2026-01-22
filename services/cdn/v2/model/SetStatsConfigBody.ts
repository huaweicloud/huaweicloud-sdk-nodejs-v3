

export class SetStatsConfigBody {
    private 'config_type'?: number;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    private 'config_info'?: object;
    public constructor(resourceType?: string, resourceName?: string, configInfo?: object) { 
        this['resource_type'] = resourceType;
        this['resource_name'] = resourceName;
        this['config_info'] = configInfo;
    }
    public withConfigType(configType: number): SetStatsConfigBody {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: number  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): number | undefined {
        return this['config_type'];
    }
    public withResourceType(resourceType: string): SetStatsConfigBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): SetStatsConfigBody {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withConfigInfo(configInfo: object): SetStatsConfigBody {
        this['config_info'] = configInfo;
        return this;
    }
    public set configInfo(configInfo: object  | undefined) {
        this['config_info'] = configInfo;
    }
    public get configInfo(): object | undefined {
        return this['config_info'];
    }
}


export class EnvParam {
    private 'component_id'?: string;
    public description?: string;
    private 'env_name'?: string;
    private 'env_type'?: string;
    private 'os_type'?: string;
    public region?: string;
    private 'register_type'?: string;
    public constructor(componentId?: string, envName?: string, envType?: string, osType?: string) { 
        this['component_id'] = componentId;
        this['env_name'] = envName;
        this['env_type'] = envType;
        this['os_type'] = osType;
    }
    public withComponentId(componentId: string): EnvParam {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withDescription(description: string): EnvParam {
        this['description'] = description;
        return this;
    }
    public withEnvName(envName: string): EnvParam {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvType(envType: string): EnvParam {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: string  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): string | undefined {
        return this['env_type'];
    }
    public withOsType(osType: string): EnvParam {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRegion(region: string): EnvParam {
        this['region'] = region;
        return this;
    }
    public withRegisterType(registerType: string): EnvParam {
        this['register_type'] = registerType;
        return this;
    }
    public set registerType(registerType: string  | undefined) {
        this['register_type'] = registerType;
    }
    public get registerType(): string | undefined {
        return this['register_type'];
    }
}
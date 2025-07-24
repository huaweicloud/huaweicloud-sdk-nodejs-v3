

export class Environment {
    private 'environment_id'?: string;
    private 'environment_name'?: string;
    private 'environment_description'?: string;
    private 'is_default'?: boolean;
    public constructor() { 
    }
    public withEnvironmentId(environmentId: string): Environment {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withEnvironmentName(environmentName: string): Environment {
        this['environment_name'] = environmentName;
        return this;
    }
    public set environmentName(environmentName: string  | undefined) {
        this['environment_name'] = environmentName;
    }
    public get environmentName(): string | undefined {
        return this['environment_name'];
    }
    public withEnvironmentDescription(environmentDescription: string): Environment {
        this['environment_description'] = environmentDescription;
        return this;
    }
    public set environmentDescription(environmentDescription: string  | undefined) {
        this['environment_description'] = environmentDescription;
    }
    public get environmentDescription(): string | undefined {
        return this['environment_description'];
    }
    public withIsDefault(isDefault: boolean): Environment {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}
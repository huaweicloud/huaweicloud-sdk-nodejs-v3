

export class CreateBuildJobSteps {
    public properties?: { [key: string]: object; };
    private 'module_id'?: string;
    public name?: string;
    public version?: string;
    public enable?: boolean;
    public constructor(moduleId?: string, name?: string) { 
        this['module_id'] = moduleId;
        this['name'] = name;
    }
    public withProperties(properties: { [key: string]: object; }): CreateBuildJobSteps {
        this['properties'] = properties;
        return this;
    }
    public withModuleId(moduleId: string): CreateBuildJobSteps {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): CreateBuildJobSteps {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CreateBuildJobSteps {
        this['version'] = version;
        return this;
    }
    public withEnable(enable: boolean): CreateBuildJobSteps {
        this['enable'] = enable;
        return this;
    }
}
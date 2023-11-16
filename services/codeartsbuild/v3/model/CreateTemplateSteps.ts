

export class CreateTemplateSteps {
    public properties?: { [key: string]: object; };
    private 'module_id'?: string;
    public name?: string;
    public version?: string;
    public enable?: boolean;
    public constructor(moduleId?: string) { 
        this['module_id'] = moduleId;
    }
    public withProperties(properties: { [key: string]: object; }): CreateTemplateSteps {
        this['properties'] = properties;
        return this;
    }
    public withModuleId(moduleId: string): CreateTemplateSteps {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): CreateTemplateSteps {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CreateTemplateSteps {
        this['version'] = version;
        return this;
    }
    public withEnable(enable: boolean): CreateTemplateSteps {
        this['enable'] = enable;
        return this;
    }
}
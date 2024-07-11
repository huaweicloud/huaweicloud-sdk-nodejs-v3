

export class DeployV2OperationsDO {
    public id?: string;
    public name?: string;
    public description?: string;
    public code?: string;
    public params?: string;
    public entrance?: string;
    public version?: string;
    private 'module_id'?: string;
    public constructor() { 
    }
    public withId(id: string): DeployV2OperationsDO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeployV2OperationsDO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeployV2OperationsDO {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): DeployV2OperationsDO {
        this['code'] = code;
        return this;
    }
    public withParams(params: string): DeployV2OperationsDO {
        this['params'] = params;
        return this;
    }
    public withEntrance(entrance: string): DeployV2OperationsDO {
        this['entrance'] = entrance;
        return this;
    }
    public withVersion(version: string): DeployV2OperationsDO {
        this['version'] = version;
        return this;
    }
    public withModuleId(moduleId: string): DeployV2OperationsDO {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}
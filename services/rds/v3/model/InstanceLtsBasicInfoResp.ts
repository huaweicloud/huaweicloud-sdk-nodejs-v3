

export class InstanceLtsBasicInfoResp {
    public id?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'engine_category'?: string;
    public status?: string;
    private 'enterprise_project_id'?: string;
    public actions?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): InstanceLtsBasicInfoResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceLtsBasicInfoResp {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): InstanceLtsBasicInfoResp {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): InstanceLtsBasicInfoResp {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withEngineCategory(engineCategory: string): InstanceLtsBasicInfoResp {
        this['engine_category'] = engineCategory;
        return this;
    }
    public set engineCategory(engineCategory: string  | undefined) {
        this['engine_category'] = engineCategory;
    }
    public get engineCategory(): string | undefined {
        return this['engine_category'];
    }
    public withStatus(status: string): InstanceLtsBasicInfoResp {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceLtsBasicInfoResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withActions(actions: Array<string>): InstanceLtsBasicInfoResp {
        this['actions'] = actions;
        return this;
    }
}
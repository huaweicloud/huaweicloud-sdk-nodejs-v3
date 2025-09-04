

export class HtapLTSConfigResponseInstance {
    public id?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    public status?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public constructor(id?: string, name?: string, engineName?: string, engineVersion?: string, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['engine_name'] = engineName;
        this['engine_version'] = engineVersion;
        this['status'] = status;
    }
    public withId(id: string): HtapLTSConfigResponseInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HtapLTSConfigResponseInstance {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): HtapLTSConfigResponseInstance {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): HtapLTSConfigResponseInstance {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withStatus(status: string): HtapLTSConfigResponseInstance {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HtapLTSConfigResponseInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): HtapLTSConfigResponseInstance {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
}


export class ZoneResolutionInstances {
    public id?: string;
    public name?: string;
    public status?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ZoneResolutionInstances {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ZoneResolutionInstances {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ZoneResolutionInstances {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ZoneResolutionInstances {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ZoneResolutionInstances {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}
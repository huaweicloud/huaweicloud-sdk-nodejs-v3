

export class CreateTopicRequestBody {
    public name?: string;
    private 'display_name'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, displayName?: string) { 
        this['name'] = name;
        this['display_name'] = displayName;
    }
    public withName(name: string): CreateTopicRequestBody {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): CreateTopicRequestBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateTopicRequestBody {
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
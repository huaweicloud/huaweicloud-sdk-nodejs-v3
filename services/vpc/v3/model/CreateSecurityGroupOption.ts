import { ResourceTag } from './ResourceTag';


export class CreateSecurityGroupOption {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSecurityGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSecurityGroupOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecurityGroupOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): CreateSecurityGroupOption {
        this['tags'] = tags;
        return this;
    }
}
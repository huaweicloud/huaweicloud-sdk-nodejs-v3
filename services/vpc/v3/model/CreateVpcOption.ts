import { Tag } from './Tag';


export class CreateVpcOption {
    public name: string;
    public description?: string;
    public cidr: string;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<Tag>;
    public constructor(name?: any, cidr?: any) { 
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withName(name: string): CreateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVpcOption {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): CreateVpcOption {
        this['cidr'] = cidr;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVpcOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateVpcOption {
        this['tags'] = tags;
        return this;
    }
}
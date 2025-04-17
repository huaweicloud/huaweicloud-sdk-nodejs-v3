import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class EnterpriseProjectIdAndTags {
    private 'enterprise_project_id'?: string;
    public tag?: ResourceGroupTagRelation;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EnterpriseProjectIdAndTags {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTag(tag: ResourceGroupTagRelation): EnterpriseProjectIdAndTags {
        this['tag'] = tag;
        return this;
    }
}
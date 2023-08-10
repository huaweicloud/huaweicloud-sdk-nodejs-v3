import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class CreateResourceGroupRequestBody {
    private 'group_name'?: string;
    private 'enterprise_project_id'?: string;
    public type?: string;
    public tags?: Array<ResourceGroupTagRelation>;
    private 'association_ep_ids'?: Array<string>;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): CreateResourceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateResourceGroupRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): CreateResourceGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): CreateResourceGroupRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAssociationEpIds(associationEpIds: Array<string>): CreateResourceGroupRequestBody {
        this['association_ep_ids'] = associationEpIds;
        return this;
    }
    public set associationEpIds(associationEpIds: Array<string>  | undefined) {
        this['association_ep_ids'] = associationEpIds;
    }
    public get associationEpIds(): Array<string> | undefined {
        return this['association_ep_ids'];
    }
}
import { CreateResourceGroup } from './CreateResourceGroup';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class CreateResourceGroupRequestBody {
    private 'group_name'?: string;
    public resources?: Array<CreateResourceGroup>;
    public type?: string;
    private 'relation_ids'?: Array<string>;
    public tags?: Array<ResourceGroupTagRelation>;
    private 'enterprise_project_id'?: string;
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
    public withResources(resources: Array<CreateResourceGroup>): CreateResourceGroupRequestBody {
        this['resources'] = resources;
        return this;
    }
    public withType(type: string): CreateResourceGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withRelationIds(relationIds: Array<string>): CreateResourceGroupRequestBody {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): CreateResourceGroupRequestBody {
        this['tags'] = tags;
        return this;
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
}
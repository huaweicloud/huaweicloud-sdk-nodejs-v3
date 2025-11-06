import { CreateResourceGroup } from './CreateResourceGroup';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class UpdateResourceGroupRequestBody {
    private 'group_name'?: string;
    public resources?: Array<CreateResourceGroup>;
    public type?: string;
    private 'relation_ids'?: Array<string>;
    public tags?: Array<ResourceGroupTagRelation>;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): UpdateResourceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResources(resources: Array<CreateResourceGroup>): UpdateResourceGroupRequestBody {
        this['resources'] = resources;
        return this;
    }
    public withType(type: string): UpdateResourceGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withRelationIds(relationIds: Array<string>): UpdateResourceGroupRequestBody {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): UpdateResourceGroupRequestBody {
        this['tags'] = tags;
        return this;
    }
}
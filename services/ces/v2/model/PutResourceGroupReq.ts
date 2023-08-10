import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class PutResourceGroupReq {
    private 'group_name'?: string;
    public tags?: Array<ResourceGroupTagRelation>;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): PutResourceGroupReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): PutResourceGroupReq {
        this['tags'] = tags;
        return this;
    }
}
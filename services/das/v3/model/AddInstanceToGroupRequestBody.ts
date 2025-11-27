

export class AddInstanceToGroupRequestBody {
    private 'group_id'?: number;
    private 'instance_ids'?: Array<string>;
    public constructor(groupId?: number, instanceIds?: Array<string>) { 
        this['group_id'] = groupId;
        this['instance_ids'] = instanceIds;
    }
    public withGroupId(groupId: number): AddInstanceToGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withInstanceIds(instanceIds: Array<string>): AddInstanceToGroupRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}
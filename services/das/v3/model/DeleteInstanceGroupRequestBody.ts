

export class DeleteInstanceGroupRequestBody {
    private 'group_id'?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): DeleteInstanceGroupRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
}


export class SwitchoverReplicaSetRequestBody {
    private 'group_id'?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): SwitchoverReplicaSetRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}
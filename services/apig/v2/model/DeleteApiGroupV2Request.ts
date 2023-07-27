

export class DeleteApiGroupV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public constructor(instanceId?: string, groupId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): DeleteApiGroupV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): DeleteApiGroupV2Request {
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


export class ShowIpGroupRequest {
    private 'group_id'?: string;
    private 'instance_id'?: string;
    public constructor(groupId?: string, instanceId?: string) { 
        this['group_id'] = groupId;
        this['instance_id'] = instanceId;
    }
    public withGroupId(groupId: string): ShowIpGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withInstanceId(instanceId: string): ShowIpGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}
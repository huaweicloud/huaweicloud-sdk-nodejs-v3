

export class ShowScalingPolicyRequest {
    private 'server_group_id'?: string;
    public constructor(serverGroupId?: string) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): ShowScalingPolicyRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
}
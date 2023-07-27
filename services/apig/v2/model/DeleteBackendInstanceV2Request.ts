

export class DeleteBackendInstanceV2Request {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    private 'member_id'?: string;
    public constructor(instanceId?: string, vpcChannelId?: string, memberId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
        this['member_id'] = memberId;
    }
    public withInstanceId(instanceId: string): DeleteBackendInstanceV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): DeleteBackendInstanceV2Request {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withMemberId(memberId: string): DeleteBackendInstanceV2Request {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
}
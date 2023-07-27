

export class DeleteVpcChannelV2Request {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    public constructor(instanceId?: string, vpcChannelId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withInstanceId(instanceId: string): DeleteVpcChannelV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): DeleteVpcChannelV2Request {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
}
import { VpcMemberModify } from './VpcMemberModify';


export class UpdateBackendInstancesV2Request {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    public body?: VpcMemberModify;
    public constructor(instanceId?: string, vpcChannelId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withInstanceId(instanceId: string): UpdateBackendInstancesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): UpdateBackendInstancesV2Request {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withBody(body: VpcMemberModify): UpdateBackendInstancesV2Request {
        this['body'] = body;
        return this;
    }
}
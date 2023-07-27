

export class ListBackendInstancesV2Request {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'member_group_name'?: string;
    private 'member_group_id'?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string, vpcChannelId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withInstanceId(instanceId: string): ListBackendInstancesV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): ListBackendInstancesV2Request {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withOffset(offset: number): ListBackendInstancesV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBackendInstancesV2Request {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListBackendInstancesV2Request {
        this['name'] = name;
        return this;
    }
    public withMemberGroupName(memberGroupName: string): ListBackendInstancesV2Request {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withMemberGroupId(memberGroupId: string): ListBackendInstancesV2Request {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
    public withPreciseSearch(preciseSearch: string): ListBackendInstancesV2Request {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
}
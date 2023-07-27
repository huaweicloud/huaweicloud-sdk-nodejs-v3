

export class ListMemberGroupsRequest {
    private 'instance_id'?: string;
    private 'vpc_channel_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'dict_code'?: string;
    private 'member_group_name'?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string, vpcChannelId?: string) { 
        this['instance_id'] = instanceId;
        this['vpc_channel_id'] = vpcChannelId;
    }
    public withInstanceId(instanceId: string): ListMemberGroupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVpcChannelId(vpcChannelId: string): ListMemberGroupsRequest {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withOffset(offset: number): ListMemberGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMemberGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDictCode(dictCode: string): ListMemberGroupsRequest {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withMemberGroupName(memberGroupName: string): ListMemberGroupsRequest {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withPreciseSearch(preciseSearch: string): ListMemberGroupsRequest {
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
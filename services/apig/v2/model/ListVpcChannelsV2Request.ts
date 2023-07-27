

export class ListVpcChannelsV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    private 'dict_code'?: string;
    private 'precise_search'?: string;
    private 'member_host'?: string;
    private 'member_port'?: number;
    private 'member_group_name'?: string;
    private 'member_group_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListVpcChannelsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListVpcChannelsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVpcChannelsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListVpcChannelsV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListVpcChannelsV2Request {
        this['name'] = name;
        return this;
    }
    public withDictCode(dictCode: string): ListVpcChannelsV2Request {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withPreciseSearch(preciseSearch: string): ListVpcChannelsV2Request {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
    public withMemberHost(memberHost: string): ListVpcChannelsV2Request {
        this['member_host'] = memberHost;
        return this;
    }
    public set memberHost(memberHost: string  | undefined) {
        this['member_host'] = memberHost;
    }
    public get memberHost(): string | undefined {
        return this['member_host'];
    }
    public withMemberPort(memberPort: number): ListVpcChannelsV2Request {
        this['member_port'] = memberPort;
        return this;
    }
    public set memberPort(memberPort: number  | undefined) {
        this['member_port'] = memberPort;
    }
    public get memberPort(): number | undefined {
        return this['member_port'];
    }
    public withMemberGroupName(memberGroupName: string): ListVpcChannelsV2Request {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withMemberGroupId(memberGroupId: string): ListVpcChannelsV2Request {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
}
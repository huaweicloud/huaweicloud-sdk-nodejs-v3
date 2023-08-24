

export class ChangeHostsGroupRequestInfo {
    private 'group_name'?: string;
    private 'group_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupName(groupName: string): ChangeHostsGroupRequestInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): ChangeHostsGroupRequestInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostIdList(hostIdList: Array<string>): ChangeHostsGroupRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}
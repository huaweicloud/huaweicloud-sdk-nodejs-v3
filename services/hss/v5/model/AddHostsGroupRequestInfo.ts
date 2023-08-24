

export class AddHostsGroupRequestInfo {
    private 'group_name'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(groupName?: string, hostIdList?: Array<string>) { 
        this['group_name'] = groupName;
        this['host_id_list'] = hostIdList;
    }
    public withGroupName(groupName: string): AddHostsGroupRequestInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHostIdList(hostIdList: Array<string>): AddHostsGroupRequestInfo {
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
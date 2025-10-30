

export class AssociateHostsGroupRequestInfo {
    private 'group_id'?: string;
    private 'host_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    public constructor(groupId?: string, operateAll?: boolean) { 
        this['group_id'] = groupId;
        this['operate_all'] = operateAll;
    }
    public withGroupId(groupId: string): AssociateHostsGroupRequestInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostIdList(hostIdList: Array<string>): AssociateHostsGroupRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withOperateAll(operateAll: boolean): AssociateHostsGroupRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
}
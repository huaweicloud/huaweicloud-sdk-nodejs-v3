

export class AccessConfigHostGroupIdList {
    private 'host_group_id_list': Array<string> | undefined;
    public constructor(hostGroupIdList?: any) { 
        this['host_group_id_list'] = hostGroupIdList;
    }
    public withHostGroupIdList(hostGroupIdList: Array<string>): AccessConfigHostGroupIdList {
        this['host_group_id_list'] = hostGroupIdList;
        return this;
    }
    public set hostGroupIdList(hostGroupIdList: Array<string> | undefined) {
        this['host_group_id_list'] = hostGroupIdList;
    }
    public get hostGroupIdList() {
        return this['host_group_id_list'];
    }
}
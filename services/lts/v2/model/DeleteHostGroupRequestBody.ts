

export class DeleteHostGroupRequestBody {
    private 'host_group_id_list'?: Array<string>;
    public constructor(hostGroupIdList?: Array<string>) { 
        this['host_group_id_list'] = hostGroupIdList;
    }
    public withHostGroupIdList(hostGroupIdList: Array<string>): DeleteHostGroupRequestBody {
        this['host_group_id_list'] = hostGroupIdList;
        return this;
    }
    public set hostGroupIdList(hostGroupIdList: Array<string>  | undefined) {
        this['host_group_id_list'] = hostGroupIdList;
    }
    public get hostGroupIdList(): Array<string> | undefined {
        return this['host_group_id_list'];
    }
}
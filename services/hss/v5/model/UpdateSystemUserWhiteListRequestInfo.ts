

export class UpdateSystemUserWhiteListRequestInfo {
    private 'host_id'?: string;
    private 'system_user_name_list'?: Array<string>;
    public remarks?: string;
    public constructor(hostId?: string, systemUserNameList?: Array<string>) { 
        this['host_id'] = hostId;
        this['system_user_name_list'] = systemUserNameList;
    }
    public withHostId(hostId: string): UpdateSystemUserWhiteListRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withSystemUserNameList(systemUserNameList: Array<string>): UpdateSystemUserWhiteListRequestInfo {
        this['system_user_name_list'] = systemUserNameList;
        return this;
    }
    public set systemUserNameList(systemUserNameList: Array<string>  | undefined) {
        this['system_user_name_list'] = systemUserNameList;
    }
    public get systemUserNameList(): Array<string> | undefined {
        return this['system_user_name_list'];
    }
    public withRemarks(remarks: string): UpdateSystemUserWhiteListRequestInfo {
        this['remarks'] = remarks;
        return this;
    }
}
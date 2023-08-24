

export class SetRaspSwitchRequestInfo {
    private 'host_id_list'?: Array<string>;
    public status?: boolean;
    public constructor() { 
    }
    public withHostIdList(hostIdList: Array<string>): SetRaspSwitchRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withStatus(status: boolean): SetRaspSwitchRequestInfo {
        this['status'] = status;
        return this;
    }
}
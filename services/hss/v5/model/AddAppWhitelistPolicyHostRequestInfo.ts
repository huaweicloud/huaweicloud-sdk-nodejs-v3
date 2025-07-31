

export class AddAppWhitelistPolicyHostRequestInfo {
    private 'host_id_list'?: Array<string>;
    public constructor(hostIdList?: Array<string>) { 
        this['host_id_list'] = hostIdList;
    }
    public withHostIdList(hostIdList: Array<string>): AddAppWhitelistPolicyHostRequestInfo {
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
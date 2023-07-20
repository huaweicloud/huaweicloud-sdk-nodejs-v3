

export class RemoveIpGroupIpRequestBody {
    private 'ip_list'?: Array<string>;
    public constructor(ipList?: Array<string>) { 
        this['ip_list'] = ipList;
    }
    public withIpList(ipList: Array<string>): RemoveIpGroupIpRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
}
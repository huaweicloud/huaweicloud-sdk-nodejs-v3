

export class RemoveIpGroupIpRequestBody {
    private 'ip_list': Array<string> | undefined;
    public constructor(ipList?: any) { 
        this['ip_list'] = ipList;
    }
    public withIpList(ipList: Array<string>): RemoveIpGroupIpRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string> | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList() {
        return this['ip_list'];
    }
}


export class ModifyLoginCommonIpRequestInfo {
    private 'ip_addr'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(ipAddr?: string, hostIdList?: Array<string>) { 
        this['ip_addr'] = ipAddr;
        this['host_id_list'] = hostIdList;
    }
    public withIpAddr(ipAddr: string): ModifyLoginCommonIpRequestInfo {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withHostIdList(hostIdList: Array<string>): ModifyLoginCommonIpRequestInfo {
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
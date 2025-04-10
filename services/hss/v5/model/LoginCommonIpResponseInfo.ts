

export class LoginCommonIpResponseInfo {
    private 'ip_addr'?: string;
    private 'total_num'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withIpAddr(ipAddr: string): LoginCommonIpResponseInfo {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withTotalNum(totalNum: number): LoginCommonIpResponseInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withHostIdList(hostIdList: Array<string>): LoginCommonIpResponseInfo {
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
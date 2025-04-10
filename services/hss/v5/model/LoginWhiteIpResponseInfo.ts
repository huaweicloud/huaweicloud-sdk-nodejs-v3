

export class LoginWhiteIpResponseInfo {
    public enabled?: boolean;
    private 'white_ip'?: string;
    private 'total_num'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): LoginWhiteIpResponseInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withWhiteIp(whiteIp: string): LoginWhiteIpResponseInfo {
        this['white_ip'] = whiteIp;
        return this;
    }
    public set whiteIp(whiteIp: string  | undefined) {
        this['white_ip'] = whiteIp;
    }
    public get whiteIp(): string | undefined {
        return this['white_ip'];
    }
    public withTotalNum(totalNum: number): LoginWhiteIpResponseInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withHostIdList(hostIdList: Array<string>): LoginWhiteIpResponseInfo {
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
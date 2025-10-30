

export class ModifyLoginWhiteIpRequestBody {
    public enabled?: boolean;
    private 'white_ip'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(whiteIp?: string) { 
        this['white_ip'] = whiteIp;
    }
    public withEnabled(enabled: boolean): ModifyLoginWhiteIpRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withWhiteIp(whiteIp: string): ModifyLoginWhiteIpRequestBody {
        this['white_ip'] = whiteIp;
        return this;
    }
    public set whiteIp(whiteIp: string  | undefined) {
        this['white_ip'] = whiteIp;
    }
    public get whiteIp(): string | undefined {
        return this['white_ip'];
    }
    public withHostIdList(hostIdList: Array<string>): ModifyLoginWhiteIpRequestBody {
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
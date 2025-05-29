

export class SwitchGaussMySqlProxyEipRequestBody {
    private 'public_ip'?: string;
    private 'public_ip_id'?: string;
    public bind?: string;
    public constructor(publicIp?: string, bind?: string) { 
        this['public_ip'] = publicIp;
        this['bind'] = bind;
    }
    public withPublicIp(publicIp: string): SwitchGaussMySqlProxyEipRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpId(publicIpId: string): SwitchGaussMySqlProxyEipRequestBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withBind(bind: string): SwitchGaussMySqlProxyEipRequestBody {
        this['bind'] = bind;
        return this;
    }
}
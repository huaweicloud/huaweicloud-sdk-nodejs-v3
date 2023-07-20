

export class EipOperateProtectReqIpInfos {
    public id?: string;
    private 'public_ip'?: string;
    private 'public_ipv6'?: string;
    public constructor() { 
    }
    public withId(id: string): EipOperateProtectReqIpInfos {
        this['id'] = id;
        return this;
    }
    public withPublicIp(publicIp: string): EipOperateProtectReqIpInfos {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpv6(publicIpv6: string): EipOperateProtectReqIpInfos {
        this['public_ipv6'] = publicIpv6;
        return this;
    }
    public set publicIpv6(publicIpv6: string  | undefined) {
        this['public_ipv6'] = publicIpv6;
    }
    public get publicIpv6(): string | undefined {
        return this['public_ipv6'];
    }
}
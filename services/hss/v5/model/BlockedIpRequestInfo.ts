

export class BlockedIpRequestInfo {
    private 'host_id'?: string;
    private 'src_ip'?: string;
    private 'login_type'?: string;
    public constructor(hostId?: string, srcIp?: string, loginType?: string) { 
        this['host_id'] = hostId;
        this['src_ip'] = srcIp;
        this['login_type'] = loginType;
    }
    public withHostId(hostId: string): BlockedIpRequestInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withSrcIp(srcIp: string): BlockedIpRequestInfo {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withLoginType(loginType: string): BlockedIpRequestInfo {
        this['login_type'] = loginType;
        return this;
    }
    public set loginType(loginType: string  | undefined) {
        this['login_type'] = loginType;
    }
    public get loginType(): string | undefined {
        return this['login_type'];
    }
}
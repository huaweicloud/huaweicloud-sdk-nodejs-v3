

export class BindEipOpenRequest {
    private 'public_ip'?: string;
    private 'public_ip_id'?: string;
    public constructor() { 
    }
    public withPublicIp(publicIp: string): BindEipOpenRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpId(publicIpId: string): BindEipOpenRequest {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
}
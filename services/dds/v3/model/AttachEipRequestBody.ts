

export class AttachEipRequestBody {
    private 'public_ip_id'?: string;
    private 'public_ip'?: string;
    public constructor(publicIpId?: string, publicIp?: string) { 
        this['public_ip_id'] = publicIpId;
        this['public_ip'] = publicIp;
    }
    public withPublicIpId(publicIpId: string): AttachEipRequestBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withPublicIp(publicIp: string): AttachEipRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
}
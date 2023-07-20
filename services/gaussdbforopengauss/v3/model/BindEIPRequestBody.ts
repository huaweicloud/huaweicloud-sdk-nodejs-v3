

export class BindEIPRequestBody {
    public action?: string;
    private 'public_ip'?: string;
    private 'public_ip_id'?: string;
    public constructor(action?: string, publicIp?: string, publicIpId?: string) { 
        this['action'] = action;
        this['public_ip'] = publicIp;
        this['public_ip_id'] = publicIpId;
    }
    public withAction(action: string): BindEIPRequestBody {
        this['action'] = action;
        return this;
    }
    public withPublicIp(publicIp: string): BindEIPRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpId(publicIpId: string): BindEIPRequestBody {
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
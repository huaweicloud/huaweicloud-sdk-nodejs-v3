

export class ModifyPublicIpRequestBody {
    public action?: string;
    private 'public_ip'?: string;
    private 'public_ip_id'?: string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): ModifyPublicIpRequestBody {
        this['action'] = action;
        return this;
    }
    public withPublicIp(publicIp: string): ModifyPublicIpRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpId(publicIpId: string): ModifyPublicIpRequestBody {
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
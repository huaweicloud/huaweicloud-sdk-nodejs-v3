

export class ServerBindPublicIPRequest {
    private 'public_ip_id'?: string;
    public constructor() { 
    }
    public withPublicIpId(publicIpId: string): ServerBindPublicIPRequest {
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
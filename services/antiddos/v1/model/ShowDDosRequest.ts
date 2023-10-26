

export class ShowDDosRequest {
    private 'floating_ip_id'?: string;
    public ip?: string;
    public constructor(floatingIpId?: string) { 
        this['floating_ip_id'] = floatingIpId;
    }
    public withFloatingIpId(floatingIpId: string): ShowDDosRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withIp(ip: string): ShowDDosRequest {
        this['ip'] = ip;
        return this;
    }
}
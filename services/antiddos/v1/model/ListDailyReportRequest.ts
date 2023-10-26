

export class ListDailyReportRequest {
    private 'floating_ip_id'?: string;
    public ip?: string;
    public constructor(floatingIpId?: string) { 
        this['floating_ip_id'] = floatingIpId;
    }
    public withFloatingIpId(floatingIpId: string): ListDailyReportRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withIp(ip: string): ListDailyReportRequest {
        this['ip'] = ip;
        return this;
    }
}
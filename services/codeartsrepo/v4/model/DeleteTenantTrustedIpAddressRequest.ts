

export class DeleteTenantTrustedIpAddressRequest {
    private 'ip_id'?: number;
    public constructor(ipId?: number) { 
        this['ip_id'] = ipId;
    }
    public withIpId(ipId: number): DeleteTenantTrustedIpAddressRequest {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: number  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): number | undefined {
        return this['ip_id'];
    }
}
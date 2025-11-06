

export class DeleteTrustedIpAddressRequest {
    public id?: number;
    private 'ip_id'?: number;
    public constructor(id?: number, ipId?: number) { 
        this['id'] = id;
        this['ip_id'] = ipId;
    }
    public withId(id: number): DeleteTrustedIpAddressRequest {
        this['id'] = id;
        return this;
    }
    public withIpId(ipId: number): DeleteTrustedIpAddressRequest {
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


export class ListTenantTrustedIpAddressesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListTenantTrustedIpAddressesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantTrustedIpAddressesRequest {
        this['limit'] = limit;
        return this;
    }
}
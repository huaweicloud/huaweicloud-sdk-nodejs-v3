

export class ListTrustedIpAddressesRequest {
    public id?: number;
    public offset?: number;
    public limit?: number;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): ListTrustedIpAddressesRequest {
        this['id'] = id;
        return this;
    }
    public withOffset(offset: number): ListTrustedIpAddressesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTrustedIpAddressesRequest {
        this['limit'] = limit;
        return this;
    }
}
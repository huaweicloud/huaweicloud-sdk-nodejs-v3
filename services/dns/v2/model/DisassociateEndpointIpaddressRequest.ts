

export class DisassociateEndpointIpaddressRequest {
    private 'endpoint_id'?: string;
    private 'ipaddress_id'?: string;
    public constructor(endpointId?: string, ipaddressId?: string) { 
        this['endpoint_id'] = endpointId;
        this['ipaddress_id'] = ipaddressId;
    }
    public withEndpointId(endpointId: string): DisassociateEndpointIpaddressRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withIpaddressId(ipaddressId: string): DisassociateEndpointIpaddressRequest {
        this['ipaddress_id'] = ipaddressId;
        return this;
    }
    public set ipaddressId(ipaddressId: string  | undefined) {
        this['ipaddress_id'] = ipaddressId;
    }
    public get ipaddressId(): string | undefined {
        return this['ipaddress_id'];
    }
}
import { Ipaddresses } from './Ipaddresses';


export class AssociateEndpointIpaddressRequest {
    private 'endpoint_id'?: string;
    public body?: Ipaddresses;
    public constructor(endpointId?: string) { 
        this['endpoint_id'] = endpointId;
    }
    public withEndpointId(endpointId: string): AssociateEndpointIpaddressRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withBody(body: Ipaddresses): AssociateEndpointIpaddressRequest {
        this['body'] = body;
        return this;
    }
}
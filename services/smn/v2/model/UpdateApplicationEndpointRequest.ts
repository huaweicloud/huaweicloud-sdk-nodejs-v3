import { UpdateApplicationEndpointRequestBody } from './UpdateApplicationEndpointRequestBody';


export class UpdateApplicationEndpointRequest {
    private 'endpoint_urn'?: string;
    public body?: UpdateApplicationEndpointRequestBody;
    public constructor(endpointUrn?: string) { 
        this['endpoint_urn'] = endpointUrn;
    }
    public withEndpointUrn(endpointUrn: string): UpdateApplicationEndpointRequest {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string  | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn(): string | undefined {
        return this['endpoint_urn'];
    }
    public withBody(body: UpdateApplicationEndpointRequestBody): UpdateApplicationEndpointRequest {
        this['body'] = body;
        return this;
    }
}
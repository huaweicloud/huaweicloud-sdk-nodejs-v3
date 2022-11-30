import { UpdateApplicationEndpointRequestBody } from './UpdateApplicationEndpointRequestBody';


export class UpdateApplicationEndpointRequest {
    private 'endpoint_urn': string | undefined;
    public body?: UpdateApplicationEndpointRequestBody;
    public constructor(endpointUrn?: any) { 
        this['endpoint_urn'] = endpointUrn;
    }
    public withEndpointUrn(endpointUrn: string): UpdateApplicationEndpointRequest {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn() {
        return this['endpoint_urn'];
    }
    public withBody(body: UpdateApplicationEndpointRequestBody): UpdateApplicationEndpointRequest {
        this['body'] = body;
        return this;
    }
}
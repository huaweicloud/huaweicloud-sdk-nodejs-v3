import { PublishAppMessageRequestBody } from './PublishAppMessageRequestBody';


export class PublishAppMessageRequest {
    private 'endpoint_urn': string | undefined;
    public body?: PublishAppMessageRequestBody;
    public constructor(endpointUrn?: any) { 
        this['endpoint_urn'] = endpointUrn;
    }
    public withEndpointUrn(endpointUrn: string): PublishAppMessageRequest {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn() {
        return this['endpoint_urn'];
    }
    public withBody(body: PublishAppMessageRequestBody): PublishAppMessageRequest {
        this['body'] = body;
        return this;
    }
}
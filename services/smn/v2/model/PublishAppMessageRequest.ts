import { PublishAppMessageRequestBody } from './PublishAppMessageRequestBody';


export class PublishAppMessageRequest {
    private 'endpoint_urn'?: string;
    public body?: PublishAppMessageRequestBody;
    public constructor(endpointUrn?: string) { 
        this['endpoint_urn'] = endpointUrn;
    }
    public withEndpointUrn(endpointUrn: string): PublishAppMessageRequest {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string  | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn(): string | undefined {
        return this['endpoint_urn'];
    }
    public withBody(body: PublishAppMessageRequestBody): PublishAppMessageRequest {
        this['body'] = body;
        return this;
    }
}
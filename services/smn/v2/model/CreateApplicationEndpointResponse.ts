
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationEndpointResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'endpoint_urn'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateApplicationEndpointResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withEndpointUrn(endpointUrn: string): CreateApplicationEndpointResponse {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string  | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn(): string | undefined {
        return this['endpoint_urn'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationEndpointResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'endpoint_urn'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateApplicationEndpointResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withEndpointUrn(endpointUrn: string): CreateApplicationEndpointResponse {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn() {
        return this['endpoint_urn'];
    }
}
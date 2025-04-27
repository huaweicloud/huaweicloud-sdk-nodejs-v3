import { EndpointResp } from './EndpointResp';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointsResponse extends SdkResponse {
    public endpoints?: Array<EndpointResp>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withEndpoints(endpoints: Array<EndpointResp>): ListEndpointsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withMetadata(metadata: Metadata): ListEndpointsResponse {
        this['metadata'] = metadata;
        return this;
    }
}
import { Metadata } from './Metadata';
import { OpenAPIResponseStatus } from './OpenAPIResponseStatus';
import { OpenAPISpec } from './OpenAPISpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterEndpointsResponse extends SdkResponse {
    public metadata?: Metadata;
    public spec?: OpenAPISpec;
    public status?: OpenAPIResponseStatus;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: Metadata): ShowClusterEndpointsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: OpenAPISpec): ShowClusterEndpointsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: OpenAPIResponseStatus): ShowClusterEndpointsResponse {
        this['status'] = status;
        return this;
    }
}
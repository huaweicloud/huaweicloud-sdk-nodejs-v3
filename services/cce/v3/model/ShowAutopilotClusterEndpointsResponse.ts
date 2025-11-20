import { Metadata } from './Metadata';
import { OpenAPIResponseStatus } from './OpenAPIResponseStatus';
import { OpenAPISpec } from './OpenAPISpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotClusterEndpointsResponse extends SdkResponse {
    public metadata?: Metadata;
    public spec?: OpenAPISpec;
    public status?: OpenAPIResponseStatus;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: Metadata): ShowAutopilotClusterEndpointsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: OpenAPISpec): ShowAutopilotClusterEndpointsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: OpenAPIResponseStatus): ShowAutopilotClusterEndpointsResponse {
        this['status'] = status;
        return this;
    }
}
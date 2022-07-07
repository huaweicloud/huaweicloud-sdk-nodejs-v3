import { MasterEIPResponseStatus } from './MasterEIPResponseStatus';
import { Metadata } from './Metadata';
import { OpenAPIResponseSpec } from './OpenAPIResponseSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterEndpointsResponse extends SdkResponse {
    public metadata?: Metadata;
    public spec?: OpenAPIResponseSpec;
    public status?: MasterEIPResponseStatus;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: Metadata): ShowClusterEndpointsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: OpenAPIResponseSpec): ShowClusterEndpointsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: MasterEIPResponseStatus): ShowClusterEndpointsResponse {
        this['status'] = status;
        return this;
    }
}
import { Metadata } from './Metadata';
import { VpcsData } from './VpcsData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointVpcsResponse extends SdkResponse {
    public vpcs?: Array<VpcsData>;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withVpcs(vpcs: Array<VpcsData>): ListEndpointVpcsResponse {
        this['vpcs'] = vpcs;
        return this;
    }
    public withMetadata(metadata: Metadata): ListEndpointVpcsResponse {
        this['metadata'] = metadata;
        return this;
    }
}
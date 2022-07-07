import { MasterEIPResponseSpec } from './MasterEIPResponseSpec';
import { MasterEIPResponseStatus } from './MasterEIPResponseStatus';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterEipResponse extends SdkResponse {
    public metadata?: Metadata;
    public spec?: MasterEIPResponseSpec;
    public status?: MasterEIPResponseStatus;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: Metadata): UpdateClusterEipResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: MasterEIPResponseSpec): UpdateClusterEipResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: MasterEIPResponseStatus): UpdateClusterEipResponse {
        this['status'] = status;
        return this;
    }
}
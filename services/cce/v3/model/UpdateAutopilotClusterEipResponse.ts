import { MasterEIPResponseSpec } from './MasterEIPResponseSpec';
import { MasterEIPResponseStatus } from './MasterEIPResponseStatus';
import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAutopilotClusterEipResponse extends SdkResponse {
    public metadata?: Metadata;
    public spec?: MasterEIPResponseSpec;
    public status?: MasterEIPResponseStatus;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: Metadata): UpdateAutopilotClusterEipResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: MasterEIPResponseSpec): UpdateAutopilotClusterEipResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: MasterEIPResponseStatus): UpdateAutopilotClusterEipResponse {
        this['status'] = status;
        return this;
    }
}
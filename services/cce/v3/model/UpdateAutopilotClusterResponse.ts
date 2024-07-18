import { AutopilotClusterMetadata } from './AutopilotClusterMetadata';
import { AutopilotClusterSpec } from './AutopilotClusterSpec';
import { AutopilotClusterStatus } from './AutopilotClusterStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAutopilotClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AutopilotClusterMetadata;
    public spec?: AutopilotClusterSpec;
    public status?: AutopilotClusterStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdateAutopilotClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateAutopilotClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadata): UpdateAutopilotClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AutopilotClusterSpec): UpdateAutopilotClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AutopilotClusterStatus): UpdateAutopilotClusterResponse {
        this['status'] = status;
        return this;
    }
}
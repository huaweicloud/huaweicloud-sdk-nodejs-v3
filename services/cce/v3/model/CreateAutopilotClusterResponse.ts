import { AutopilotClusterMetadata } from './AutopilotClusterMetadata';
import { AutopilotClusterSpec } from './AutopilotClusterSpec';
import { AutopilotClusterStatus } from './AutopilotClusterStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AutopilotClusterMetadata;
    public spec?: AutopilotClusterSpec;
    public status?: AutopilotClusterStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateAutopilotClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAutopilotClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadata): CreateAutopilotClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AutopilotClusterSpec): CreateAutopilotClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AutopilotClusterStatus): CreateAutopilotClusterResponse {
        this['status'] = status;
        return this;
    }
}
import { AutopilotClusterMetadata } from './AutopilotClusterMetadata';
import { AutopilotClusterSpec } from './AutopilotClusterSpec';
import { AutopilotClusterStatus } from './AutopilotClusterStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AutopilotClusterMetadata;
    public spec?: AutopilotClusterSpec;
    public status?: AutopilotClusterStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAutopilotClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAutopilotClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadata): ShowAutopilotClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AutopilotClusterSpec): ShowAutopilotClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AutopilotClusterStatus): ShowAutopilotClusterResponse {
        this['status'] = status;
        return this;
    }
}
import { AutopilotClusterMetadata } from './AutopilotClusterMetadata';
import { AutopilotClusterSpec } from './AutopilotClusterSpec';
import { AutopilotClusterStatus } from './AutopilotClusterStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAutopilotClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AutopilotClusterMetadata;
    public spec?: AutopilotClusterSpec;
    public status?: AutopilotClusterStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): DeleteAutopilotClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): DeleteAutopilotClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadata): DeleteAutopilotClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AutopilotClusterSpec): DeleteAutopilotClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AutopilotClusterStatus): DeleteAutopilotClusterResponse {
        this['status'] = status;
        return this;
    }
}
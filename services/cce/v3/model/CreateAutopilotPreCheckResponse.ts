import { PrecheckCluserResponseMetadata } from './PrecheckCluserResponseMetadata';
import { PrecheckSpec } from './PrecheckSpec';
import { PrecheckStatus } from './PrecheckStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotPreCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PrecheckCluserResponseMetadata;
    public spec?: PrecheckSpec;
    public status?: PrecheckStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateAutopilotPreCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateAutopilotPreCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PrecheckCluserResponseMetadata): CreateAutopilotPreCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PrecheckSpec): CreateAutopilotPreCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PrecheckStatus): CreateAutopilotPreCheckResponse {
        this['status'] = status;
        return this;
    }
}
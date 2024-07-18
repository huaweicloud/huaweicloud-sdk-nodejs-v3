import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotUpgradeWorkFlowResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateAutopilotUpgradeWorkFlowResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAutopilotUpgradeWorkFlowResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): CreateAutopilotUpgradeWorkFlowResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): CreateAutopilotUpgradeWorkFlowResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): CreateAutopilotUpgradeWorkFlowResponse {
        this['status'] = status;
        return this;
    }
}
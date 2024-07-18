import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotUpgradeWorkFlowResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAutopilotUpgradeWorkFlowResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAutopilotUpgradeWorkFlowResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowAutopilotUpgradeWorkFlowResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): ShowAutopilotUpgradeWorkFlowResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): ShowAutopilotUpgradeWorkFlowResponse {
        this['status'] = status;
        return this;
    }
}
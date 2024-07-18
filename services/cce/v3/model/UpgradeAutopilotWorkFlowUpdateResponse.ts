import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeAutopilotWorkFlowUpdateResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpgradeAutopilotWorkFlowUpdateResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradeAutopilotWorkFlowUpdateResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): UpgradeAutopilotWorkFlowUpdateResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): UpgradeAutopilotWorkFlowUpdateResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): UpgradeAutopilotWorkFlowUpdateResponse {
        this['status'] = status;
        return this;
    }
}
import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeWorkFlowUpdateResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpgradeWorkFlowUpdateResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradeWorkFlowUpdateResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): UpgradeWorkFlowUpdateResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): UpgradeWorkFlowUpdateResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): UpgradeWorkFlowUpdateResponse {
        this['status'] = status;
        return this;
    }
}
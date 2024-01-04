import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUpgradeWorkFlowResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateUpgradeWorkFlowResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateUpgradeWorkFlowResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): CreateUpgradeWorkFlowResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): CreateUpgradeWorkFlowResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): CreateUpgradeWorkFlowResponse {
        this['status'] = status;
        return this;
    }
}
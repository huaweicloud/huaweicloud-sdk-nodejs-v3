import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeWorkFlowResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowUpgradeWorkFlowResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowUpgradeWorkFlowResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowUpgradeWorkFlowResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): ShowUpgradeWorkFlowResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): ShowUpgradeWorkFlowResponse {
        this['status'] = status;
        return this;
    }
}
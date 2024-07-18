import { Metadata } from './Metadata';
import { UpgradeInfoSpec } from './UpgradeInfoSpec';
import { UpgradeInfoStatus } from './UpgradeInfoStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotClusterUpgradeInfoResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: UpgradeInfoSpec;
    public status?: UpgradeInfoStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAutopilotClusterUpgradeInfoResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAutopilotClusterUpgradeInfoResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowAutopilotClusterUpgradeInfoResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeInfoSpec): ShowAutopilotClusterUpgradeInfoResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradeInfoStatus): ShowAutopilotClusterUpgradeInfoResponse {
        this['status'] = status;
        return this;
    }
}
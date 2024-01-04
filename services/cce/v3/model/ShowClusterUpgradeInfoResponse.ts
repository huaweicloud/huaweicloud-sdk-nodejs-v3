import { Metadata } from './Metadata';
import { UpgradeInfoSpec } from './UpgradeInfoSpec';
import { UpgradeInfoStatus } from './UpgradeInfoStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterUpgradeInfoResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: UpgradeInfoSpec;
    public status?: UpgradeInfoStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowClusterUpgradeInfoResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowClusterUpgradeInfoResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): ShowClusterUpgradeInfoResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeInfoSpec): ShowClusterUpgradeInfoResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradeInfoStatus): ShowClusterUpgradeInfoResponse {
        this['status'] = status;
        return this;
    }
}
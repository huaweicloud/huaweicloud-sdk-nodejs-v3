import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './UpgradeTaskSpec';
import { UpgradeTaskStatus } from './UpgradeTaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeClusterTaskResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: UpgradeTaskMetadata;
    public spec?: UpgradeTaskSpec;
    public status?: UpgradeTaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowUpgradeClusterTaskResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowUpgradeClusterTaskResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpgradeTaskMetadata): ShowUpgradeClusterTaskResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeTaskSpec): ShowUpgradeClusterTaskResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradeTaskStatus): ShowUpgradeClusterTaskResponse {
        this['status'] = status;
        return this;
    }
}
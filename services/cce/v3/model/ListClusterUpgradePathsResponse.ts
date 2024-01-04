import { Metadata } from './Metadata';
import { UpgradePath } from './UpgradePath';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterUpgradePathsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public upgradePaths?: Array<UpgradePath>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListClusterUpgradePathsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListClusterUpgradePathsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListClusterUpgradePathsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withUpgradePaths(upgradePaths: Array<UpgradePath>): ListClusterUpgradePathsResponse {
        this['upgradePaths'] = upgradePaths;
        return this;
    }
}
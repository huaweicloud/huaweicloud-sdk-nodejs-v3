import { Metadata } from './Metadata';
import { UpgradePath } from './UpgradePath';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotClusterUpgradePathsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public upgradePaths?: Array<UpgradePath>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAutopilotClusterUpgradePathsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListAutopilotClusterUpgradePathsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListAutopilotClusterUpgradePathsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withUpgradePaths(upgradePaths: Array<UpgradePath>): ListAutopilotClusterUpgradePathsResponse {
        this['upgradePaths'] = upgradePaths;
        return this;
    }
}
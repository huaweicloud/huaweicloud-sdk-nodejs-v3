import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotClusterUpgradeFeatureGatesResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public upgradeFeatureGates?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAutopilotClusterUpgradeFeatureGatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListAutopilotClusterUpgradeFeatureGatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListAutopilotClusterUpgradeFeatureGatesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withUpgradeFeatureGates(upgradeFeatureGates: { [key: string]: string; }): ListAutopilotClusterUpgradeFeatureGatesResponse {
        this['upgradeFeatureGates'] = upgradeFeatureGates;
        return this;
    }
}
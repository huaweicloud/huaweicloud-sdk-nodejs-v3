import { Metadata } from './Metadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterUpgradeFeatureGatesResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: Metadata;
    public upgradeFeatureGates?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListClusterUpgradeFeatureGatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListClusterUpgradeFeatureGatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): ListClusterUpgradeFeatureGatesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withUpgradeFeatureGates(upgradeFeatureGates: { [key: string]: string; }): ListClusterUpgradeFeatureGatesResponse {
        this['upgradeFeatureGates'] = upgradeFeatureGates;
        return this;
    }
}
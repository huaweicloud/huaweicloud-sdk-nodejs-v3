import { UpgradeCluserResponseMetadata } from './UpgradeCluserResponseMetadata';
import { UpgradeResponseSpec } from './UpgradeResponseSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeClusterResponse extends SdkResponse {
    public metadata?: UpgradeCluserResponseMetadata;
    public spec?: UpgradeResponseSpec;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: UpgradeCluserResponseMetadata): UpgradeClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeResponseSpec): UpgradeClusterResponse {
        this['spec'] = spec;
        return this;
    }
}
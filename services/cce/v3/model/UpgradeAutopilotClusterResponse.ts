import { UpgradeCluserResponseMetadata } from './UpgradeCluserResponseMetadata';
import { UpgradeResponseSpec } from './UpgradeResponseSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeAutopilotClusterResponse extends SdkResponse {
    public metadata?: UpgradeCluserResponseMetadata;
    public spec?: UpgradeResponseSpec;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: UpgradeCluserResponseMetadata): UpgradeAutopilotClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeResponseSpec): UpgradeAutopilotClusterResponse {
        this['spec'] = spec;
        return this;
    }
}
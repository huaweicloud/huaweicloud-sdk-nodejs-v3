import { UpgradeResult } from './UpgradeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpgradeDatabaseVersionResponse extends SdkResponse {
    private 'upgrade_results'?: Array<UpgradeResult>;
    public constructor() { 
        super();
    }
    public withUpgradeResults(upgradeResults: Array<UpgradeResult>): BatchUpgradeDatabaseVersionResponse {
        this['upgrade_results'] = upgradeResults;
        return this;
    }
    public set upgradeResults(upgradeResults: Array<UpgradeResult>  | undefined) {
        this['upgrade_results'] = upgradeResults;
    }
    public get upgradeResults(): Array<UpgradeResult> | undefined {
        return this['upgrade_results'];
    }
}
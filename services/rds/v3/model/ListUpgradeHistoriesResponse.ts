import { UpgradeReports } from './UpgradeReports';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpgradeHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'upgrade_reports'?: Array<UpgradeReports>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListUpgradeHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUpgradeReports(upgradeReports: Array<UpgradeReports>): ListUpgradeHistoriesResponse {
        this['upgrade_reports'] = upgradeReports;
        return this;
    }
    public set upgradeReports(upgradeReports: Array<UpgradeReports>  | undefined) {
        this['upgrade_reports'] = upgradeReports;
    }
    public get upgradeReports(): Array<UpgradeReports> | undefined {
        return this['upgrade_reports'];
    }
}
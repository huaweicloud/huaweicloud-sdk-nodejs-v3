import { DesktopVersionStatistic } from './DesktopVersionStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopStatisticsByVersionResponse extends SdkResponse {
    private 'version_statistics'?: Array<DesktopVersionStatistic>;
    public constructor() { 
        super();
    }
    public withVersionStatistics(versionStatistics: Array<DesktopVersionStatistic>): ListDesktopStatisticsByVersionResponse {
        this['version_statistics'] = versionStatistics;
        return this;
    }
    public set versionStatistics(versionStatistics: Array<DesktopVersionStatistic>  | undefined) {
        this['version_statistics'] = versionStatistics;
    }
    public get versionStatistics(): Array<DesktopVersionStatistic> | undefined {
        return this['version_statistics'];
    }
}
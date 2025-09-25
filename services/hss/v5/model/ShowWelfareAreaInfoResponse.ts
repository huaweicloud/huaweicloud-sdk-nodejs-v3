import { HttpWelfareInfoResponseInfoActivitiesInfo } from './HttpWelfareInfoResponseInfoActivitiesInfo';
import { HttpWelfareInfoResponseInfoHotInfo } from './HttpWelfareInfoResponseInfoHotInfo';
import { HttpWelfareInfoResponseInfoVersionUpdateInfo } from './HttpWelfareInfoResponseInfoVersionUpdateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWelfareAreaInfoResponse extends SdkResponse {
    private 'hot_info'?: HttpWelfareInfoResponseInfoHotInfo;
    private 'version_update_info'?: HttpWelfareInfoResponseInfoVersionUpdateInfo;
    private 'activities_info'?: HttpWelfareInfoResponseInfoActivitiesInfo;
    public constructor() { 
        super();
    }
    public withHotInfo(hotInfo: HttpWelfareInfoResponseInfoHotInfo): ShowWelfareAreaInfoResponse {
        this['hot_info'] = hotInfo;
        return this;
    }
    public set hotInfo(hotInfo: HttpWelfareInfoResponseInfoHotInfo  | undefined) {
        this['hot_info'] = hotInfo;
    }
    public get hotInfo(): HttpWelfareInfoResponseInfoHotInfo | undefined {
        return this['hot_info'];
    }
    public withVersionUpdateInfo(versionUpdateInfo: HttpWelfareInfoResponseInfoVersionUpdateInfo): ShowWelfareAreaInfoResponse {
        this['version_update_info'] = versionUpdateInfo;
        return this;
    }
    public set versionUpdateInfo(versionUpdateInfo: HttpWelfareInfoResponseInfoVersionUpdateInfo  | undefined) {
        this['version_update_info'] = versionUpdateInfo;
    }
    public get versionUpdateInfo(): HttpWelfareInfoResponseInfoVersionUpdateInfo | undefined {
        return this['version_update_info'];
    }
    public withActivitiesInfo(activitiesInfo: HttpWelfareInfoResponseInfoActivitiesInfo): ShowWelfareAreaInfoResponse {
        this['activities_info'] = activitiesInfo;
        return this;
    }
    public set activitiesInfo(activitiesInfo: HttpWelfareInfoResponseInfoActivitiesInfo  | undefined) {
        this['activities_info'] = activitiesInfo;
    }
    public get activitiesInfo(): HttpWelfareInfoResponseInfoActivitiesInfo | undefined {
        return this['activities_info'];
    }
}
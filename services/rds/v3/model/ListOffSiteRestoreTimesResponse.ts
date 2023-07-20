import { GetRestoreTimeResponseRestoreTime } from './GetRestoreTimeResponseRestoreTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOffSiteRestoreTimesResponse extends SdkResponse {
    private 'restore_time'?: Array<GetRestoreTimeResponseRestoreTime>;
    public constructor() { 
        super();
    }
    public withRestoreTime(restoreTime: Array<GetRestoreTimeResponseRestoreTime>): ListOffSiteRestoreTimesResponse {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: Array<GetRestoreTimeResponseRestoreTime>  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): Array<GetRestoreTimeResponseRestoreTime> | undefined {
        return this['restore_time'];
    }
}
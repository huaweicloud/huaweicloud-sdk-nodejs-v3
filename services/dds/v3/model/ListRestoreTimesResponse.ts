import { ListRestoreTimesResponseBodyRestoreTime } from './ListRestoreTimesResponseBodyRestoreTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreTimesResponse extends SdkResponse {
    private 'restore_time'?: Array<ListRestoreTimesResponseBodyRestoreTime>;
    public constructor() { 
        super();
    }
    public withRestoreTime(restoreTime: Array<ListRestoreTimesResponseBodyRestoreTime>): ListRestoreTimesResponse {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: Array<ListRestoreTimesResponseBodyRestoreTime>  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): Array<ListRestoreTimesResponseBodyRestoreTime> | undefined {
        return this['restore_time'];
    }
}
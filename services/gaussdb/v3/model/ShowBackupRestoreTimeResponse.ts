import { RestoreTimeInfo } from './RestoreTimeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupRestoreTimeResponse extends SdkResponse {
    private 'restore_times'?: Array<RestoreTimeInfo>;
    public constructor() { 
        super();
    }
    public withRestoreTimes(restoreTimes: Array<RestoreTimeInfo>): ShowBackupRestoreTimeResponse {
        this['restore_times'] = restoreTimes;
        return this;
    }
    public set restoreTimes(restoreTimes: Array<RestoreTimeInfo>  | undefined) {
        this['restore_times'] = restoreTimes;
    }
    public get restoreTimes(): Array<RestoreTimeInfo> | undefined {
        return this['restore_times'];
    }
}
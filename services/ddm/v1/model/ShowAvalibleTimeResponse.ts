import { RestoreTimeInterval } from './RestoreTimeInterval';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvalibleTimeResponse extends SdkResponse {
    private 'restorable_time_intervals'?: Array<RestoreTimeInterval>;
    public constructor() { 
        super();
    }
    public withRestorableTimeIntervals(restorableTimeIntervals: Array<RestoreTimeInterval>): ShowAvalibleTimeResponse {
        this['restorable_time_intervals'] = restorableTimeIntervals;
        return this;
    }
    public set restorableTimeIntervals(restorableTimeIntervals: Array<RestoreTimeInterval>  | undefined) {
        this['restorable_time_intervals'] = restorableTimeIntervals;
    }
    public get restorableTimeIntervals(): Array<RestoreTimeInterval> | undefined {
        return this['restorable_time_intervals'];
    }
}
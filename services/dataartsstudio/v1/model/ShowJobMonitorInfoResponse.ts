import { JobMonitorInfo } from './JobMonitorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobMonitorInfoResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_monitor_info_list'?: Array<JobMonitorInfo>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowJobMonitorInfoResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowJobMonitorInfoResponse {
        this['message'] = message;
        return this;
    }
    public withJobMonitorInfoList(jobMonitorInfoList: Array<JobMonitorInfo>): ShowJobMonitorInfoResponse {
        this['job_monitor_info_list'] = jobMonitorInfoList;
        return this;
    }
    public set jobMonitorInfoList(jobMonitorInfoList: Array<JobMonitorInfo>  | undefined) {
        this['job_monitor_info_list'] = jobMonitorInfoList;
    }
    public get jobMonitorInfoList(): Array<JobMonitorInfo> | undefined {
        return this['job_monitor_info_list'];
    }
}
import { JobQueryBean } from './JobQueryBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobExeListNewResponse extends SdkResponse {
    private 'total_record'?: number | undefined;
    private 'job_list'?: Array<JobQueryBean> | undefined;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ShowJobExeListNewResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord() {
        return this['total_record'];
    }
    public withJobList(jobList: Array<JobQueryBean>): ShowJobExeListNewResponse {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: Array<JobQueryBean> | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList() {
        return this['job_list'];
    }
}
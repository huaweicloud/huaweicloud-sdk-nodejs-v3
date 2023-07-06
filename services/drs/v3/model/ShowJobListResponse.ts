import { JobInfo } from './JobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobListResponse extends SdkResponse {
    private 'total_record'?: number | undefined;
    public jobs?: Array<JobInfo>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ShowJobListResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord() {
        return this['total_record'];
    }
    public withJobs(jobs: Array<JobInfo>): ShowJobListResponse {
        this['jobs'] = jobs;
        return this;
    }
}
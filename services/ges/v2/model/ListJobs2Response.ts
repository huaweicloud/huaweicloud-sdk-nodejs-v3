import { ListJobsRespJobList } from './ListJobsRespJobList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobs2Response extends SdkResponse {
    private 'job_count'?: number | undefined;
    private 'job_list'?: Array<ListJobsRespJobList> | undefined;
    public constructor() { 
        super();
    }
    public withJobCount(jobCount: number): ListJobs2Response {
        this['job_count'] = jobCount;
        return this;
    }
    public set jobCount(jobCount: number | undefined) {
        this['job_count'] = jobCount;
    }
    public get jobCount() {
        return this['job_count'];
    }
    public withJobList(jobList: Array<ListJobsRespJobList>): ListJobs2Response {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: Array<ListJobsRespJobList> | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList() {
        return this['job_list'];
    }
}
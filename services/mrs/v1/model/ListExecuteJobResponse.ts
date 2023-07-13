import { JobExeResult } from './JobExeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExecuteJobResponse extends SdkResponse {
    public totalRecord?: number;
    private 'job_executions'?: Array<JobExeResult> | undefined;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListExecuteJobResponse {
        this['totalRecord'] = totalRecord;
        return this;
    }
    public withJobExecutions(jobExecutions: Array<JobExeResult>): ListExecuteJobResponse {
        this['job_executions'] = jobExecutions;
        return this;
    }
    public set jobExecutions(jobExecutions: Array<JobExeResult> | undefined) {
        this['job_executions'] = jobExecutions;
    }
    public get jobExecutions() {
        return this['job_executions'];
    }
}
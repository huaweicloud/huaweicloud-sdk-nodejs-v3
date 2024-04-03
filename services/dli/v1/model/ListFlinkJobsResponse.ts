import { FlinkJobList } from './FlinkJobList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlinkJobsResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    private 'job_list'?: FlinkJobList;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): ListFlinkJobsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListFlinkJobsResponse {
        this['message'] = message;
        return this;
    }
    public withJobList(jobList: FlinkJobList): ListFlinkJobsResponse {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: FlinkJobList  | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList(): FlinkJobList | undefined {
        return this['job_list'];
    }
}
import { JobMap } from './JobMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportFlinkJobsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_mapping'?: Array<JobMap>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ImportFlinkJobsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ImportFlinkJobsResponse {
        this['message'] = message;
        return this;
    }
    public withJobMapping(jobMapping: Array<JobMap>): ImportFlinkJobsResponse {
        this['job_mapping'] = jobMapping;
        return this;
    }
    public set jobMapping(jobMapping: Array<JobMap>  | undefined) {
        this['job_mapping'] = jobMapping;
    }
    public get jobMapping(): Array<JobMap> | undefined {
        return this['job_mapping'];
    }
}
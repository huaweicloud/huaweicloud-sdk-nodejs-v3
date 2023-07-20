import { JobMapInfo } from './JobMapInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportFlinkJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_mapping'?: Array<JobMapInfo>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ImportFlinkJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ImportFlinkJobResponse {
        this['message'] = message;
        return this;
    }
    public withJobMapping(jobMapping: Array<JobMapInfo>): ImportFlinkJobResponse {
        this['job_mapping'] = jobMapping;
        return this;
    }
    public set jobMapping(jobMapping: Array<JobMapInfo>  | undefined) {
        this['job_mapping'] = jobMapping;
    }
    public get jobMapping(): Array<JobMapInfo> | undefined {
        return this['job_mapping'];
    }
}
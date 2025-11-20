import { PreCheckResult } from './PreCheckResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckMigrateLogicDbResponse extends SdkResponse {
    private 'pre_check_results'?: Array<PreCheckResult>;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withPreCheckResults(preCheckResults: Array<PreCheckResult>): CheckMigrateLogicDbResponse {
        this['pre_check_results'] = preCheckResults;
        return this;
    }
    public set preCheckResults(preCheckResults: Array<PreCheckResult>  | undefined) {
        this['pre_check_results'] = preCheckResults;
    }
    public get preCheckResults(): Array<PreCheckResult> | undefined {
        return this['pre_check_results'];
    }
    public withJobId(jobId: string): CheckMigrateLogicDbResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}
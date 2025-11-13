import { AssessResult } from './AssessResult';
import { JobState } from './JobState';
import { ShortJobType } from './ShortJobType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShortJobResponse extends SdkResponse {
    private 'job_type'?: ShortJobType;
    private 'job_id'?: string;
    public state?: JobState;
    private 'job_failed_code'?: string;
    private 'job_failed_reason'?: string;
    private 'create_time'?: number;
    private 'lastupdate_time'?: number;
    private 'assess_result'?: AssessResult;
    public constructor() { 
        super();
    }
    public withJobType(jobType: ShortJobType): ShowShortJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ShortJobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ShortJobType | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): ShowShortJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: JobState): ShowShortJobResponse {
        this['state'] = state;
        return this;
    }
    public withJobFailedCode(jobFailedCode: string): ShowShortJobResponse {
        this['job_failed_code'] = jobFailedCode;
        return this;
    }
    public set jobFailedCode(jobFailedCode: string  | undefined) {
        this['job_failed_code'] = jobFailedCode;
    }
    public get jobFailedCode(): string | undefined {
        return this['job_failed_code'];
    }
    public withJobFailedReason(jobFailedReason: string): ShowShortJobResponse {
        this['job_failed_reason'] = jobFailedReason;
        return this;
    }
    public set jobFailedReason(jobFailedReason: string  | undefined) {
        this['job_failed_reason'] = jobFailedReason;
    }
    public get jobFailedReason(): string | undefined {
        return this['job_failed_reason'];
    }
    public withCreateTime(createTime: number): ShowShortJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: number): ShowShortJobResponse {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: number  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): number | undefined {
        return this['lastupdate_time'];
    }
    public withAssessResult(assessResult: AssessResult): ShowShortJobResponse {
        this['assess_result'] = assessResult;
        return this;
    }
    public set assessResult(assessResult: AssessResult  | undefined) {
        this['assess_result'] = assessResult;
    }
    public get assessResult(): AssessResult | undefined {
        return this['assess_result'];
    }
}
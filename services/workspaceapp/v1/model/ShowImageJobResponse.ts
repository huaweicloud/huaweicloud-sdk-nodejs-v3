import { ImageJobDetailInfo } from './ImageJobDetailInfo';
import { ImageJobInfo } from './ImageJobInfo';
import { ImageJobStatus } from './ImageJobStatus';
import { ImageJobType } from './ImageJobType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageJobResponse extends SdkResponse {
    public id?: string;
    private 'job_type'?: ImageJobType;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: ImageJobStatus;
    private 'sub_jobs_total'?: number;
    private 'sub_jobs'?: Array<ImageJobDetailInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowImageJobResponse {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: ImageJobType): ShowImageJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ImageJobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ImageJobType | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: Date): ShowImageJobResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ShowImageJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: ImageJobStatus): ShowImageJobResponse {
        this['status'] = status;
        return this;
    }
    public withSubJobsTotal(subJobsTotal: number): ShowImageJobResponse {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
    public withSubJobs(subJobs: Array<ImageJobDetailInfo>): ShowImageJobResponse {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<ImageJobDetailInfo>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<ImageJobDetailInfo> | undefined {
        return this['sub_jobs'];
    }
}
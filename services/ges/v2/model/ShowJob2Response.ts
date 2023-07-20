import { ShowJobRespJobDetail } from './ShowJobRespJobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJob2Response extends SdkResponse {
    private 'job_id'?: string;
    public status?: string;
    private 'job_type'?: string;
    private 'job_name'?: string;
    private 'related_graph'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'job_detail'?: ShowJobRespJobDetail;
    private 'fail_reason'?: string;
    private 'job_progress'?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowJob2Response {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ShowJob2Response {
        this['status'] = status;
        return this;
    }
    public withJobType(jobType: string): ShowJob2Response {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobName(jobName: string): ShowJob2Response {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withRelatedGraph(relatedGraph: string): ShowJob2Response {
        this['related_graph'] = relatedGraph;
        return this;
    }
    public set relatedGraph(relatedGraph: string  | undefined) {
        this['related_graph'] = relatedGraph;
    }
    public get relatedGraph(): string | undefined {
        return this['related_graph'];
    }
    public withBeginTime(beginTime: string): ShowJob2Response {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJob2Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobDetail(jobDetail: ShowJobRespJobDetail): ShowJob2Response {
        this['job_detail'] = jobDetail;
        return this;
    }
    public set jobDetail(jobDetail: ShowJobRespJobDetail  | undefined) {
        this['job_detail'] = jobDetail;
    }
    public get jobDetail(): ShowJobRespJobDetail | undefined {
        return this['job_detail'];
    }
    public withFailReason(failReason: string): ShowJob2Response {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withJobProgress(jobProgress: number): ShowJob2Response {
        this['job_progress'] = jobProgress;
        return this;
    }
    public set jobProgress(jobProgress: number  | undefined) {
        this['job_progress'] = jobProgress;
    }
    public get jobProgress(): number | undefined {
        return this['job_progress'];
    }
}
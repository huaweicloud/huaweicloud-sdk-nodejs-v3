import { JobStatus } from './JobStatus';
import { JobType } from './JobType';


export class JobInfo {
    public id?: string;
    private 'job_type'?: JobType;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: JobStatus;
    private 'sub_jobs_total'?: number;
    public constructor() { 
    }
    public withId(id: string): JobInfo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: JobType): JobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: Date): JobInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): JobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: JobStatus): JobInfo {
        this['status'] = status;
        return this;
    }
    public withSubJobsTotal(subJobsTotal: number): JobInfo {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
}
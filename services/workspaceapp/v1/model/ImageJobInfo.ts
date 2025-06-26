import { ImageJobStatus } from './ImageJobStatus';
import { ImageJobType } from './ImageJobType';


export class ImageJobInfo {
    public id?: string;
    private 'job_type'?: ImageJobType;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: ImageJobStatus;
    private 'sub_jobs_total'?: number;
    public constructor() { 
    }
    public withId(id: string): ImageJobInfo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: ImageJobType): ImageJobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ImageJobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ImageJobType | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: Date): ImageJobInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ImageJobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: ImageJobStatus): ImageJobInfo {
        this['status'] = status;
        return this;
    }
    public withSubJobsTotal(subJobsTotal: number): ImageJobInfo {
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
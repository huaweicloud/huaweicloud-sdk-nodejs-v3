import { RecyclingJob } from './RecyclingJob';


export class RecyclingJobsResult {
    private 'keep_time'?: number;
    public total?: number;
    private 'job_list'?: Array<RecyclingJob>;
    public constructor() { 
    }
    public withKeepTime(keepTime: number): RecyclingJobsResult {
        this['keep_time'] = keepTime;
        return this;
    }
    public set keepTime(keepTime: number  | undefined) {
        this['keep_time'] = keepTime;
    }
    public get keepTime(): number | undefined {
        return this['keep_time'];
    }
    public withTotal(total: number): RecyclingJobsResult {
        this['total'] = total;
        return this;
    }
    public withJobList(jobList: Array<RecyclingJob>): RecyclingJobsResult {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: Array<RecyclingJob>  | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList(): Array<RecyclingJob> | undefined {
        return this['job_list'];
    }
}
import { SubJobInfo } from './SubJobInfo';


export class JobDetail {
    private 'job_id'?: string;
    private 'job_type'?: number;
    private 'job_status'?: number;
    private 'sub_jobs'?: Array<SubJobInfo>;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'expected_end_time'?: Date;
    private 'execute_code'?: string;
    private 'execute_message'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): JobDetail {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: number): JobDetail {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withJobStatus(jobStatus: number): JobDetail {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: number  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): number | undefined {
        return this['job_status'];
    }
    public withSubJobs(subJobs: Array<SubJobInfo>): JobDetail {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJobInfo>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJobInfo> | undefined {
        return this['sub_jobs'];
    }
    public withBeginTime(beginTime: Date): JobDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): JobDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withExpectedEndTime(expectedEndTime: Date): JobDetail {
        this['expected_end_time'] = expectedEndTime;
        return this;
    }
    public set expectedEndTime(expectedEndTime: Date  | undefined) {
        this['expected_end_time'] = expectedEndTime;
    }
    public get expectedEndTime(): Date | undefined {
        return this['expected_end_time'];
    }
    public withExecuteCode(executeCode: string): JobDetail {
        this['execute_code'] = executeCode;
        return this;
    }
    public set executeCode(executeCode: string  | undefined) {
        this['execute_code'] = executeCode;
    }
    public get executeCode(): string | undefined {
        return this['execute_code'];
    }
    public withExecuteMessage(executeMessage: string): JobDetail {
        this['execute_message'] = executeMessage;
        return this;
    }
    public set executeMessage(executeMessage: string  | undefined) {
        this['execute_message'] = executeMessage;
    }
    public get executeMessage(): string | undefined {
        return this['execute_message'];
    }
}
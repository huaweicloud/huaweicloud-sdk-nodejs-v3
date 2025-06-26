import { JobResourceInfo } from './JobResourceInfo';


export class SubJobInfo {
    private 'job_id'?: string;
    private 'job_type'?: number;
    private 'job_status'?: number;
    public entities?: Array<JobResourceInfo>;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'expected_end_time'?: Date;
    private 'execute_code'?: string;
    private 'execute_message'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): SubJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: number): SubJobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: number  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): number | undefined {
        return this['job_type'];
    }
    public withJobStatus(jobStatus: number): SubJobInfo {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: number  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): number | undefined {
        return this['job_status'];
    }
    public withEntities(entities: Array<JobResourceInfo>): SubJobInfo {
        this['entities'] = entities;
        return this;
    }
    public withBeginTime(beginTime: Date): SubJobInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): SubJobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withExpectedEndTime(expectedEndTime: Date): SubJobInfo {
        this['expected_end_time'] = expectedEndTime;
        return this;
    }
    public set expectedEndTime(expectedEndTime: Date  | undefined) {
        this['expected_end_time'] = expectedEndTime;
    }
    public get expectedEndTime(): Date | undefined {
        return this['expected_end_time'];
    }
    public withExecuteCode(executeCode: string): SubJobInfo {
        this['execute_code'] = executeCode;
        return this;
    }
    public set executeCode(executeCode: string  | undefined) {
        this['execute_code'] = executeCode;
    }
    public get executeCode(): string | undefined {
        return this['execute_code'];
    }
    public withExecuteMessage(executeMessage: string): SubJobInfo {
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
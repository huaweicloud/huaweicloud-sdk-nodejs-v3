

export class JobInstance {
    private 'job_name'?: string;
    public status?: JobInstanceStatusEnum | string;
    private 'job_instance_name'?: string;
    private 'plan_time'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'execute_time'?: number;
    private 'instance_id'?: number;
    private 'instance_type'?: number;
    private 'submit_time'?: number;
    private 'job_id'?: number;
    public version?: number;
    private 'force_success'?: boolean;
    private 'ignore_success'?: boolean;
    public constructor() { 
    }
    public withJobName(jobName: string): JobInstance {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStatus(status: JobInstanceStatusEnum | string): JobInstance {
        this['status'] = status;
        return this;
    }
    public withJobInstanceName(jobInstanceName: string): JobInstance {
        this['job_instance_name'] = jobInstanceName;
        return this;
    }
    public set jobInstanceName(jobInstanceName: string  | undefined) {
        this['job_instance_name'] = jobInstanceName;
    }
    public get jobInstanceName(): string | undefined {
        return this['job_instance_name'];
    }
    public withPlanTime(planTime: number): JobInstance {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withStartTime(startTime: number): JobInstance {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): JobInstance {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExecuteTime(executeTime: number): JobInstance {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withInstanceId(instanceId: number): JobInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: number): JobInstance {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: number  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): number | undefined {
        return this['instance_type'];
    }
    public withSubmitTime(submitTime: number): JobInstance {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: number  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): number | undefined {
        return this['submit_time'];
    }
    public withJobId(jobId: number): JobInstance {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withVersion(version: number): JobInstance {
        this['version'] = version;
        return this;
    }
    public withForceSuccess(forceSuccess: boolean): JobInstance {
        this['force_success'] = forceSuccess;
        return this;
    }
    public set forceSuccess(forceSuccess: boolean  | undefined) {
        this['force_success'] = forceSuccess;
    }
    public get forceSuccess(): boolean | undefined {
        return this['force_success'];
    }
    public withIgnoreSuccess(ignoreSuccess: boolean): JobInstance {
        this['ignore_success'] = ignoreSuccess;
        return this;
    }
    public set ignoreSuccess(ignoreSuccess: boolean  | undefined) {
        this['ignore_success'] = ignoreSuccess;
    }
    public get ignoreSuccess(): boolean | undefined {
        return this['ignore_success'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInstanceStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING_EXCEPTION = 'running-exception',
    PAUSE = 'pause',
    MANUAL_STOP = 'manual-stop',
    SKIP_BY_DEPEND = 'skip-by-depend',
    FREEZE = 'freeze'
}

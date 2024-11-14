

export class ScheduleDetailInfo {
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'job_status'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'datastore_type'?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(jobId?: string, jobName?: string, jobStatus?: string, instanceId?: string, instanceName?: string, instanceStatus?: string, datastoreType?: string, createTime?: string, startTime?: string, endTime?: string) { 
        this['job_id'] = jobId;
        this['job_name'] = jobName;
        this['job_status'] = jobStatus;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['instance_status'] = instanceStatus;
        this['datastore_type'] = datastoreType;
        this['create_time'] = createTime;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withJobId(jobId: string): ScheduleDetailInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ScheduleDetailInfo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobStatus(jobStatus: string): ScheduleDetailInfo {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): string | undefined {
        return this['job_status'];
    }
    public withInstanceId(instanceId: string): ScheduleDetailInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduleDetailInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): ScheduleDetailInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withDatastoreType(datastoreType: string): ScheduleDetailInfo {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withCreateTime(createTime: string): ScheduleDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ScheduleDetailInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduleDetailInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}
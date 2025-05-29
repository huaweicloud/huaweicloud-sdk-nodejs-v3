

export class RecyclingJob {
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'project_id'?: string;
    private 'creator_name'?: string;
    private 'creator_id'?: string;
    private 'create_time'?: string;
    private 'delete_time'?: string;
    private 'create_time_stamp'?: string;
    private 'delete_time_stamp'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): RecyclingJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): RecyclingJob {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withProjectId(projectId: string): RecyclingJob {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatorName(creatorName: string): RecyclingJob {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorId(creatorId: string): RecyclingJob {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreateTime(createTime: string): RecyclingJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: string): RecyclingJob {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: string  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): string | undefined {
        return this['delete_time'];
    }
    public withCreateTimeStamp(createTimeStamp: string): RecyclingJob {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: string  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): string | undefined {
        return this['create_time_stamp'];
    }
    public withDeleteTimeStamp(deleteTimeStamp: string): RecyclingJob {
        this['delete_time_stamp'] = deleteTimeStamp;
        return this;
    }
    public set deleteTimeStamp(deleteTimeStamp: string  | undefined) {
        this['delete_time_stamp'] = deleteTimeStamp;
    }
    public get deleteTimeStamp(): string | undefined {
        return this['delete_time_stamp'];
    }
}


export class JobInfo {
    private 'CREATED_BY'?: string;
    private 'EXECUTION_STATUS'?: JobInfoExecutionStatusEnum | string;
    private 'JOB_DESC'?: string;
    private 'JOB_ID'?: string;
    private 'JOB_NAME'?: string;
    private 'JOB_TYPE'?: string;
    private 'ORDER_ID'?: string;
    private 'PROJECT_ID'?: string;
    private 'SERVICE_INSTANCE_ID'?: string;
    public constructor() { 
    }
    public withCreatedBy(createdBy: string): JobInfo {
        this['CREATED_BY'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['CREATED_BY'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['CREATED_BY'];
    }
    public withExecutionStatus(executionStatus: JobInfoExecutionStatusEnum | string): JobInfo {
        this['EXECUTION_STATUS'] = executionStatus;
        return this;
    }
    public set executionStatus(executionStatus: JobInfoExecutionStatusEnum | string  | undefined) {
        this['EXECUTION_STATUS'] = executionStatus;
    }
    public get executionStatus(): JobInfoExecutionStatusEnum | string | undefined {
        return this['EXECUTION_STATUS'];
    }
    public withJobDesc(jobDesc: string): JobInfo {
        this['JOB_DESC'] = jobDesc;
        return this;
    }
    public set jobDesc(jobDesc: string  | undefined) {
        this['JOB_DESC'] = jobDesc;
    }
    public get jobDesc(): string | undefined {
        return this['JOB_DESC'];
    }
    public withJobId(jobId: string): JobInfo {
        this['JOB_ID'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['JOB_ID'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['JOB_ID'];
    }
    public withJobName(jobName: string): JobInfo {
        this['JOB_NAME'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['JOB_NAME'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['JOB_NAME'];
    }
    public withJobType(jobType: string): JobInfo {
        this['JOB_TYPE'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['JOB_TYPE'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['JOB_TYPE'];
    }
    public withOrderId(orderId: string): JobInfo {
        this['ORDER_ID'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['ORDER_ID'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['ORDER_ID'];
    }
    public withProjectId(projectId: string): JobInfo {
        this['PROJECT_ID'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['PROJECT_ID'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['PROJECT_ID'];
    }
    public withServiceInstanceId(serviceInstanceId: string): JobInfo {
        this['SERVICE_INSTANCE_ID'] = serviceInstanceId;
        return this;
    }
    public set serviceInstanceId(serviceInstanceId: string  | undefined) {
        this['SERVICE_INSTANCE_ID'] = serviceInstanceId;
    }
    public get serviceInstanceId(): string | undefined {
        return this['SERVICE_INSTANCE_ID'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInfoExecutionStatusEnum {
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}

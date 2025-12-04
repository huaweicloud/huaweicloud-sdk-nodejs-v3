

export class JobItem {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'created_time'?: string;
    private 'end_time'?: string;
    public process?: string;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public jobs?: Array<string>;
    private 'database_name'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withId(id: string): JobItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): JobItem {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: string): JobItem {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withEndTime(endTime: string): JobItem {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withProcess(process: string): JobItem {
        this['process'] = process;
        return this;
    }
    public withInstanceName(instanceName: string): JobItem {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): JobItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withJobs(jobs: Array<string>): JobItem {
        this['jobs'] = jobs;
        return this;
    }
    public withDatabaseName(databaseName: string): JobItem {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withFailReason(failReason: string): JobItem {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}
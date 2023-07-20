

export class JobInfo {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public status?: string;
    public progress?: string;
    private 'fail_reason'?: string;
    private 'created_at'?: string;
    private 'ended_at'?: string;
    public constructor(id?: string, name?: string, instanceId?: string, instanceName?: string, status?: string, progress?: string, failReason?: string, createdAt?: string, endedAt?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['status'] = status;
        this['progress'] = progress;
        this['fail_reason'] = failReason;
        this['created_at'] = createdAt;
        this['ended_at'] = endedAt;
    }
    public withId(id: string): JobInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobInfo {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): JobInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): JobInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: string): JobInfo {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: string): JobInfo {
        this['progress'] = progress;
        return this;
    }
    public withFailReason(failReason: string): JobInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withCreatedAt(createdAt: string): JobInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withEndedAt(endedAt: string): JobInfo {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: string  | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt(): string | undefined {
        return this['ended_at'];
    }
}
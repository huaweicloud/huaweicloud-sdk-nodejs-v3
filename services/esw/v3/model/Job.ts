

export class Job {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public process?: string;
    private 'fail_reason'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'project_id'?: string;
    public constructor(id?: string, name?: string, status?: string, beginTime?: string, resourceId?: string, resourceName?: string, resourceType?: string, projectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['begin_time'] = beginTime;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
        this['project_id'] = projectId;
    }
    public withId(id: string): Job {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Job {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): Job {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): Job {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): Job {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withProcess(process: string): Job {
        this['process'] = process;
        return this;
    }
    public withFailReason(failReason: string): Job {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withResourceId(resourceId: string): Job {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): Job {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): Job {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withProjectId(projectId: string): Job {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}


export class TaskDetail {
    public id?: number;
    private 'execution_id'?: number;
    private 'resource_type'?: string;
    private 'src_resource'?: string;
    private 'dst_resource'?: string;
    public operation?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'StatusRevision'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(id?: number, executionId?: number, resourceType?: string, srcResource?: string, dstResource?: string, operation?: string, jobId?: string, status?: string, statusRevision?: number, startTime?: string, endTime?: string) { 
        this['id'] = id;
        this['execution_id'] = executionId;
        this['resource_type'] = resourceType;
        this['src_resource'] = srcResource;
        this['dst_resource'] = dstResource;
        this['operation'] = operation;
        this['job_id'] = jobId;
        this['status'] = status;
        this['StatusRevision'] = statusRevision;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withId(id: number): TaskDetail {
        this['id'] = id;
        return this;
    }
    public withExecutionId(executionId: number): TaskDetail {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withResourceType(resourceType: string): TaskDetail {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withSrcResource(srcResource: string): TaskDetail {
        this['src_resource'] = srcResource;
        return this;
    }
    public set srcResource(srcResource: string  | undefined) {
        this['src_resource'] = srcResource;
    }
    public get srcResource(): string | undefined {
        return this['src_resource'];
    }
    public withDstResource(dstResource: string): TaskDetail {
        this['dst_resource'] = dstResource;
        return this;
    }
    public set dstResource(dstResource: string  | undefined) {
        this['dst_resource'] = dstResource;
    }
    public get dstResource(): string | undefined {
        return this['dst_resource'];
    }
    public withOperation(operation: string): TaskDetail {
        this['operation'] = operation;
        return this;
    }
    public withJobId(jobId: string): TaskDetail {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): TaskDetail {
        this['status'] = status;
        return this;
    }
    public withStatusRevision(statusRevision: number): TaskDetail {
        this['StatusRevision'] = statusRevision;
        return this;
    }
    public set statusRevision(statusRevision: number  | undefined) {
        this['StatusRevision'] = statusRevision;
    }
    public get statusRevision(): number | undefined {
        return this['StatusRevision'];
    }
    public withStartTime(startTime: string): TaskDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskDetail {
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
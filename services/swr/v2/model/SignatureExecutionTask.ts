

export class SignatureExecutionTask {
    public id?: number;
    private 'execution_id'?: number;
    private 'job_id'?: string;
    public status?: string;
    private 'status_text'?: string;
    public namespace?: string;
    public repository?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): SignatureExecutionTask {
        this['id'] = id;
        return this;
    }
    public withExecutionId(executionId: number): SignatureExecutionTask {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: number  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): number | undefined {
        return this['execution_id'];
    }
    public withJobId(jobId: string): SignatureExecutionTask {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): SignatureExecutionTask {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): SignatureExecutionTask {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withNamespace(namespace: string): SignatureExecutionTask {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): SignatureExecutionTask {
        this['repository'] = repository;
        return this;
    }
    public withCreatedAt(createdAt: string): SignatureExecutionTask {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SignatureExecutionTask {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}
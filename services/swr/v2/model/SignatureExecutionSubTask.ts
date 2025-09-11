

export class SignatureExecutionSubTask {
    public id?: number;
    private 'job_id'?: string;
    public namespace?: string;
    public repository?: string;
    public tags?: string;
    public digest?: string;
    public status?: string;
    private 'status_text'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): SignatureExecutionSubTask {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): SignatureExecutionSubTask {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNamespace(namespace: string): SignatureExecutionSubTask {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): SignatureExecutionSubTask {
        this['repository'] = repository;
        return this;
    }
    public withTags(tags: string): SignatureExecutionSubTask {
        this['tags'] = tags;
        return this;
    }
    public withDigest(digest: string): SignatureExecutionSubTask {
        this['digest'] = digest;
        return this;
    }
    public withStatus(status: string): SignatureExecutionSubTask {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): SignatureExecutionSubTask {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withCreatedAt(createdAt: string): SignatureExecutionSubTask {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SignatureExecutionSubTask {
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
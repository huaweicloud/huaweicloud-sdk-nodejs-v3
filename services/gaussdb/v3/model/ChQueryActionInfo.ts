

export class ChQueryActionInfo {
    public id?: string;
    public action?: string;
    private 'object_id'?: string;
    public type?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public constructor() { 
    }
    public withId(id: string): ChQueryActionInfo {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): ChQueryActionInfo {
        this['action'] = action;
        return this;
    }
    public withObjectId(objectId: string): ChQueryActionInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withType(type: string): ChQueryActionInfo {
        this['type'] = type;
        return this;
    }
    public withJobId(jobId: string): ChQueryActionInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ChQueryActionInfo {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: number): ChQueryActionInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): ChQueryActionInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
}
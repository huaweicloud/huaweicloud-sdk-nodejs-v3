

export class RecordInfoResponse {
    public id?: string;
    public action?: string;
    public status?: string;
    public message?: string;
    private 'entity_id'?: string;
    private 'entity_type'?: string;
    private 'job_id'?: string;
    private 'instance_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'extended_info'?: object;
    public constructor() { 
    }
    public withId(id: string): RecordInfoResponse {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): RecordInfoResponse {
        this['action'] = action;
        return this;
    }
    public withStatus(status: string): RecordInfoResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): RecordInfoResponse {
        this['message'] = message;
        return this;
    }
    public withEntityId(entityId: string): RecordInfoResponse {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withEntityType(entityType: string): RecordInfoResponse {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): string | undefined {
        return this['entity_type'];
    }
    public withJobId(jobId: string): RecordInfoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withInstanceId(instanceId: string): RecordInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCreatedAt(createdAt: string): RecordInfoResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): RecordInfoResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withExtendedInfo(extendedInfo: object): RecordInfoResponse {
        this['extended_info'] = extendedInfo;
        return this;
    }
    public set extendedInfo(extendedInfo: object  | undefined) {
        this['extended_info'] = extendedInfo;
    }
    public get extendedInfo(): object | undefined {
        return this['extended_info'];
    }
}
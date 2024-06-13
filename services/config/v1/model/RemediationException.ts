

export class RemediationException {
    private 'resource_id'?: string;
    public message?: string;
    private 'joined_at'?: string;
    private 'created_by'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): RemediationException {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withMessage(message: string): RemediationException {
        this['message'] = message;
        return this;
    }
    public withJoinedAt(joinedAt: string): RemediationException {
        this['joined_at'] = joinedAt;
        return this;
    }
    public set joinedAt(joinedAt: string  | undefined) {
        this['joined_at'] = joinedAt;
    }
    public get joinedAt(): string | undefined {
        return this['joined_at'];
    }
    public withCreatedBy(createdBy: string): RemediationException {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
}
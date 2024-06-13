

export class RemediationExceptionRequest {
    private 'resource_id'?: string;
    public message?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): RemediationExceptionRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withMessage(message: string): RemediationExceptionRequest {
        this['message'] = message;
        return this;
    }
}
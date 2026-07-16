

export class ShowTrainingQuotasRequest {
    private 'user_id'?: string;
    public resource?: string;
    public constructor() { 
    }
    public withUserId(userId: string): ShowTrainingQuotasRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withResource(resource: string): ShowTrainingQuotasRequest {
        this['resource'] = resource;
        return this;
    }
}
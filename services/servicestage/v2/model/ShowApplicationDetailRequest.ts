

export class ShowApplicationDetailRequest {
    private 'application_id'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ShowApplicationDetailRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
}
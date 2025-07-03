

export class DeleteAppRequest {
    private 'application_id'?: number;
    private 'x-business-id'?: number;
    public constructor(applicationId?: number, xBusinessId?: number) { 
        this['application_id'] = applicationId;
        this['x-business-id'] = xBusinessId;
    }
    public withApplicationId(applicationId: number): DeleteAppRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: number  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): number | undefined {
        return this['application_id'];
    }
    public withXBusinessId(xBusinessId: number): DeleteAppRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
}
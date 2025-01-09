

export class UpdateTenantProfileRequest {
    public body?: { [key: string]: boolean; };
    public constructor() { 
    }
    public withBody(body: { [key: string]: boolean; }): UpdateTenantProfileRequest {
        this['body'] = body;
        return this;
    }
}
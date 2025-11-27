

export class ComponentCreateRequest {
    public name?: string;
    private 'application_id'?: string;
    public constructor(name?: string, applicationId?: string) { 
        this['name'] = name;
        this['application_id'] = applicationId;
    }
    public withName(name: string): ComponentCreateRequest {
        this['name'] = name;
        return this;
    }
    public withApplicationId(applicationId: string): ComponentCreateRequest {
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
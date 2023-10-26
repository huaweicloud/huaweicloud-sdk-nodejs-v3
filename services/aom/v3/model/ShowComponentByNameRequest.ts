

export class ShowComponentByNameRequest {
    private 'application_id'?: string;
    private 'component_name'?: string;
    public constructor(applicationId?: string, componentName?: string) { 
        this['application_id'] = applicationId;
        this['component_name'] = componentName;
    }
    public withApplicationId(applicationId: string): ShowComponentByNameRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentName(componentName: string): ShowComponentByNameRequest {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
}
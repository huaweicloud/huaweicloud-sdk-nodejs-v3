

export class DeleteComponentRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    public constructor(applicationId?: string, componentId?: string) { 
        this['application_id'] = applicationId;
        this['component_id'] = componentId;
    }
    public withApplicationId(applicationId: string): DeleteComponentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): DeleteComponentRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
}
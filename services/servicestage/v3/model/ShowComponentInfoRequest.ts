

export class ShowComponentInfoRequest {
    private 'component_id'?: string;
    private 'application_id'?: string;
    private 'expect_fields'?: string;
    public constructor(componentId?: string, applicationId?: string) { 
        this['component_id'] = componentId;
        this['application_id'] = applicationId;
    }
    public withComponentId(componentId: string): ShowComponentInfoRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ShowComponentInfoRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withExpectFields(expectFields: string): ShowComponentInfoRequest {
        this['expect_fields'] = expectFields;
        return this;
    }
    public set expectFields(expectFields: string  | undefined) {
        this['expect_fields'] = expectFields;
    }
    public get expectFields(): string | undefined {
        return this['expect_fields'];
    }
}
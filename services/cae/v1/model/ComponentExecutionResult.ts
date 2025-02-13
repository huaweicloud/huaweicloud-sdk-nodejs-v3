

export class ComponentExecutionResult {
    private 'component_name'?: string;
    private 'component_id'?: string;
    public status?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withComponentName(componentName: string): ComponentExecutionResult {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withComponentId(componentId: string): ComponentExecutionResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withStatus(status: string): ComponentExecutionResult {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): ComponentExecutionResult {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}
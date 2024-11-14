

export class DeleteFunctionsRequest {
    private 'Instance-Id'?: string;
    private 'function_id'?: string;
    public constructor(functionId?: string) { 
        this['function_id'] = functionId;
    }
    public withInstanceId(instanceId: string): DeleteFunctionsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withFunctionId(functionId: string): DeleteFunctionsRequest {
        this['function_id'] = functionId;
        return this;
    }
    public set functionId(functionId: string  | undefined) {
        this['function_id'] = functionId;
    }
    public get functionId(): string | undefined {
        return this['function_id'];
    }
}


export class DeleteFunctionsRequest {
    private 'Instance-Id'?: string;
    private 'Sp-Auth-Token'?: string;
    private 'Stage-Auth-Token'?: string;
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
    public withSpAuthToken(spAuthToken: string): DeleteFunctionsRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string  | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken(): string | undefined {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): DeleteFunctionsRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string  | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken(): string | undefined {
        return this['Stage-Auth-Token'];
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
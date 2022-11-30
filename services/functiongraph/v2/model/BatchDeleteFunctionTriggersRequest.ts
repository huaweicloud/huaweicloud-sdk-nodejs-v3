

export class BatchDeleteFunctionTriggersRequest {
    private 'function_urn': string | undefined;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): BatchDeleteFunctionTriggersRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
}
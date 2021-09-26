

export class AsyncInvokeFunctionRequest {
    private 'function_urn': string | undefined;
    public body?: { [key: string]: object; };
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): AsyncInvokeFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: { [key: string]: object; }): AsyncInvokeFunctionRequest {
        this['body'] = body;
        return this;
    }
}
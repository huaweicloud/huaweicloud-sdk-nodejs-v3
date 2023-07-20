

export class AsyncInvokeReservedFunctionRequest {
    private 'function_urn'?: string;
    public body?: { [key: string]: object; };
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): AsyncInvokeReservedFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: { [key: string]: object; }): AsyncInvokeReservedFunctionRequest {
        this['body'] = body;
        return this;
    }
}
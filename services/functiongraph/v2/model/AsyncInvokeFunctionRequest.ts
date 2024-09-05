

export class AsyncInvokeFunctionRequest {
    private 'function_urn'?: string;
    private 'Content-Type'?: string;
    private 'X-Cff-Instance-Memory'?: string;
    public body?: { [key: string]: object; };
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): AsyncInvokeFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withContentType(contentType: string): AsyncInvokeFunctionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXCffInstanceMemory(xCffInstanceMemory: string): AsyncInvokeFunctionRequest {
        this['X-Cff-Instance-Memory'] = xCffInstanceMemory;
        return this;
    }
    public set xCffInstanceMemory(xCffInstanceMemory: string  | undefined) {
        this['X-Cff-Instance-Memory'] = xCffInstanceMemory;
    }
    public get xCffInstanceMemory(): string | undefined {
        return this['X-Cff-Instance-Memory'];
    }
    public withBody(body: { [key: string]: object; }): AsyncInvokeFunctionRequest {
        this['body'] = body;
        return this;
    }
}
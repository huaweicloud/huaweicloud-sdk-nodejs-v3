

export class InvokeFunctionRequest {
    private 'function_urn'?: string;
    private 'Content-Type'?: string;
    private 'X-Cff-Log-Type'?: string;
    private 'X-CFF-Request-Version'?: string;
    private 'X-Cff-Instance-Memory'?: string;
    public body?: { [key: string]: object; };
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): InvokeFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withContentType(contentType: string): InvokeFunctionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXCffLogType(xCffLogType: string): InvokeFunctionRequest {
        this['X-Cff-Log-Type'] = xCffLogType;
        return this;
    }
    public set xCffLogType(xCffLogType: string  | undefined) {
        this['X-Cff-Log-Type'] = xCffLogType;
    }
    public get xCffLogType(): string | undefined {
        return this['X-Cff-Log-Type'];
    }
    public withXCFFRequestVersion(xCFFRequestVersion: string): InvokeFunctionRequest {
        this['X-CFF-Request-Version'] = xCFFRequestVersion;
        return this;
    }
    public set xCFFRequestVersion(xCFFRequestVersion: string  | undefined) {
        this['X-CFF-Request-Version'] = xCFFRequestVersion;
    }
    public get xCFFRequestVersion(): string | undefined {
        return this['X-CFF-Request-Version'];
    }
    public withXCffInstanceMemory(xCffInstanceMemory: string): InvokeFunctionRequest {
        this['X-Cff-Instance-Memory'] = xCffInstanceMemory;
        return this;
    }
    public set xCffInstanceMemory(xCffInstanceMemory: string  | undefined) {
        this['X-Cff-Instance-Memory'] = xCffInstanceMemory;
    }
    public get xCffInstanceMemory(): string | undefined {
        return this['X-Cff-Instance-Memory'];
    }
    public withBody(body: { [key: string]: object; }): InvokeFunctionRequest {
        this['body'] = body;
        return this;
    }
}
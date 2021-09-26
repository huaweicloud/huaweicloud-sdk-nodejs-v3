

export class InvokeFunctionRequest {
    private 'function_urn': string | undefined;
    private 'X-Cff-Log-Type'?: string | undefined;
    private 'X-CFF-Request-Version'?: string | undefined;
    public body?: { [key: string]: object; };
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): InvokeFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withXCffLogType(xCffLogType: string): InvokeFunctionRequest {
        this['X-Cff-Log-Type'] = xCffLogType;
        return this;
    }
    public set xCffLogType(xCffLogType: string | undefined) {
        this['X-Cff-Log-Type'] = xCffLogType;
    }
    public get xCffLogType() {
        return this['X-Cff-Log-Type'];
    }
    public withXCFFRequestVersion(xCFFRequestVersion: string): InvokeFunctionRequest {
        this['X-CFF-Request-Version'] = xCFFRequestVersion;
        return this;
    }
    public set xCFFRequestVersion(xCFFRequestVersion: string | undefined) {
        this['X-CFF-Request-Version'] = xCFFRequestVersion;
    }
    public get xCFFRequestVersion() {
        return this['X-CFF-Request-Version'];
    }
    public withBody(body: { [key: string]: object; }): InvokeFunctionRequest {
        this['body'] = body;
        return this;
    }
}
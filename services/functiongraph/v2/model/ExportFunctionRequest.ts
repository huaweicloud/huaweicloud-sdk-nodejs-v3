

export class ExportFunctionRequest {
    private 'function_urn'?: string;
    public config?: boolean;
    public code?: boolean;
    public type?: string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): ExportFunctionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withConfig(config: boolean): ExportFunctionRequest {
        this['config'] = config;
        return this;
    }
    public withCode(code: boolean): ExportFunctionRequest {
        this['code'] = code;
        return this;
    }
    public withType(type: string): ExportFunctionRequest {
        this['type'] = type;
        return this;
    }
    public withContentType(contentType: string): ExportFunctionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}
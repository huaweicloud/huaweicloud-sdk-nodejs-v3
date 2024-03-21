

export class ListBridgeFunctionsRequest {
    private 'function_urn'?: string;
    public type?: string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): ListBridgeFunctionsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withType(type: string): ListBridgeFunctionsRequest {
        this['type'] = type;
        return this;
    }
    public withContentType(contentType: string): ListBridgeFunctionsRequest {
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
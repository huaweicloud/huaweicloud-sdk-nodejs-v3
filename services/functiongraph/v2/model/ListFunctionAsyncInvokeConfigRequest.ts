

export class ListFunctionAsyncInvokeConfigRequest {
    private 'function_urn'?: string;
    public marker?: string;
    public limit?: string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): ListFunctionAsyncInvokeConfigRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withMarker(marker: string): ListFunctionAsyncInvokeConfigRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListFunctionAsyncInvokeConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withContentType(contentType: string): ListFunctionAsyncInvokeConfigRequest {
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


export class ListFunctionAsyncInvokeConfigRequest {
    private 'function_urn': string | undefined;
    public marker?: string;
    public limit?: string;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListFunctionAsyncInvokeConfigRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
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
}
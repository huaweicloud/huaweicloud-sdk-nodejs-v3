

export class ShowFuncReservedInstanceMetricsRequest {
    public marker?: string;
    public limit?: string;
    private 'func_urn'?: string;
    private 'Content-Type'?: string;
    public constructor(funcUrn?: string, contentType?: string) { 
        this['func_urn'] = funcUrn;
        this['Content-Type'] = contentType;
    }
    public withMarker(marker: string): ShowFuncReservedInstanceMetricsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ShowFuncReservedInstanceMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFuncUrn(funcUrn: string): ShowFuncReservedInstanceMetricsRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withContentType(contentType: string): ShowFuncReservedInstanceMetricsRequest {
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
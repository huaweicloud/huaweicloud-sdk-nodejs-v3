

export class ShowFuncReservedInstanceMetricsRequest {
    public marker?: string;
    public limit?: string;
    private 'func_urn'?: string;
    public constructor(funcUrn?: string) { 
        this['func_urn'] = funcUrn;
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
}
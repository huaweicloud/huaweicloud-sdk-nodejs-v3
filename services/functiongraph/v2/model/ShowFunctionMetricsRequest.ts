

export class ShowFunctionMetricsRequest {
    private 'func_urn'?: string;
    public period?: string;
    public constructor(funcUrn?: string, period?: string) { 
        this['func_urn'] = funcUrn;
        this['period'] = period;
    }
    public withFuncUrn(funcUrn: string): ShowFunctionMetricsRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withPeriod(period: string): ShowFunctionMetricsRequest {
        this['period'] = period;
        return this;
    }
}
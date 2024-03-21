

export class ListFunctionStatisticsRequest {
    private 'func_urn'?: string;
    public period?: string;
    private 'Content-Type'?: string;
    public constructor(funcUrn?: string, period?: string, contentType?: string) { 
        this['func_urn'] = funcUrn;
        this['period'] = period;
        this['Content-Type'] = contentType;
    }
    public withFuncUrn(funcUrn: string): ListFunctionStatisticsRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withPeriod(period: string): ListFunctionStatisticsRequest {
        this['period'] = period;
        return this;
    }
    public withContentType(contentType: string): ListFunctionStatisticsRequest {
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
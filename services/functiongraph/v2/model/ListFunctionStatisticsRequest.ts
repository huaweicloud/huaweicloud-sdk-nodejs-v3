

export class ListFunctionStatisticsRequest {
    private 'func_urn': string | undefined;
    public period: string;
    public constructor(funcUrn?: any, period?: any) { 
        this['func_urn'] = funcUrn;
        this['period'] = period;
    }
    public withFuncUrn(funcUrn: string): ListFunctionStatisticsRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withPeriod(period: string): ListFunctionStatisticsRequest {
        this['period'] = period;
        return this;
    }
}
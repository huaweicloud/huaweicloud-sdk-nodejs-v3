

export class ShowFuncReservedInstanceMetricsRequest {
    private 'func_urn'?: string;
    public constructor(funcUrn?: string) { 
        this['func_urn'] = funcUrn;
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
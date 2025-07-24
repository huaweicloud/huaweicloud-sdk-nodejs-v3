

export class QueryCasesStatusResponseV2 {
    public casesStatusJA?: Array<object>;
    public constructor() { 
    }
    public withCasesStatusJA(casesStatusJA: Array<object>): QueryCasesStatusResponseV2 {
        this['casesStatusJA'] = casesStatusJA;
        return this;
    }
}
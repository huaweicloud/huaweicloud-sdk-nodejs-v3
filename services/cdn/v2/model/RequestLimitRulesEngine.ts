

export class RequestLimitRulesEngine {
    private 'limit_rate_after'?: number;
    private 'limit_rate_value'?: number;
    public constructor(limitRateAfter?: number, limitRateValue?: number) { 
        this['limit_rate_after'] = limitRateAfter;
        this['limit_rate_value'] = limitRateValue;
    }
    public withLimitRateAfter(limitRateAfter: number): RequestLimitRulesEngine {
        this['limit_rate_after'] = limitRateAfter;
        return this;
    }
    public set limitRateAfter(limitRateAfter: number  | undefined) {
        this['limit_rate_after'] = limitRateAfter;
    }
    public get limitRateAfter(): number | undefined {
        return this['limit_rate_after'];
    }
    public withLimitRateValue(limitRateValue: number): RequestLimitRulesEngine {
        this['limit_rate_value'] = limitRateValue;
        return this;
    }
    public set limitRateValue(limitRateValue: number  | undefined) {
        this['limit_rate_value'] = limitRateValue;
    }
    public get limitRateValue(): number | undefined {
        return this['limit_rate_value'];
    }
}


export class RequestLimitRules {
    public status: string;
    public type: string;
    private 'limit_rate_after'?: number | undefined;
    private 'limit_rate_value'?: number | undefined;
    public constructor(status?: any, type?: any) { 
        this['status'] = status;
        this['type'] = type;
    }
    public withStatus(status: string): RequestLimitRules {
        this['status'] = status;
        return this;
    }
    public withType(type: string): RequestLimitRules {
        this['type'] = type;
        return this;
    }
    public withLimitRateAfter(limitRateAfter: number): RequestLimitRules {
        this['limit_rate_after'] = limitRateAfter;
        return this;
    }
    public set limitRateAfter(limitRateAfter: number | undefined) {
        this['limit_rate_after'] = limitRateAfter;
    }
    public get limitRateAfter() {
        return this['limit_rate_after'];
    }
    public withLimitRateValue(limitRateValue: number): RequestLimitRules {
        this['limit_rate_value'] = limitRateValue;
        return this;
    }
    public set limitRateValue(limitRateValue: number | undefined) {
        this['limit_rate_value'] = limitRateValue;
    }
    public get limitRateValue() {
        return this['limit_rate_value'];
    }
}
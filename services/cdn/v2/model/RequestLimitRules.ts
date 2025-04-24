

export class RequestLimitRules {
    public status?: string;
    public priority?: number;
    private 'match_type'?: string;
    private 'match_value'?: string;
    public type?: string;
    private 'limit_rate_after'?: number;
    private 'limit_rate_value'?: number;
    private 'limit_time'?: string;
    public constructor(priority?: number, matchType?: string, type?: string, limitRateAfter?: number, limitRateValue?: number) { 
        this['priority'] = priority;
        this['match_type'] = matchType;
        this['type'] = type;
        this['limit_rate_after'] = limitRateAfter;
        this['limit_rate_value'] = limitRateValue;
    }
    public withStatus(status: string): RequestLimitRules {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): RequestLimitRules {
        this['priority'] = priority;
        return this;
    }
    public withMatchType(matchType: string): RequestLimitRules {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withMatchValue(matchValue: string): RequestLimitRules {
        this['match_value'] = matchValue;
        return this;
    }
    public set matchValue(matchValue: string  | undefined) {
        this['match_value'] = matchValue;
    }
    public get matchValue(): string | undefined {
        return this['match_value'];
    }
    public withType(type: string): RequestLimitRules {
        this['type'] = type;
        return this;
    }
    public withLimitRateAfter(limitRateAfter: number): RequestLimitRules {
        this['limit_rate_after'] = limitRateAfter;
        return this;
    }
    public set limitRateAfter(limitRateAfter: number  | undefined) {
        this['limit_rate_after'] = limitRateAfter;
    }
    public get limitRateAfter(): number | undefined {
        return this['limit_rate_after'];
    }
    public withLimitRateValue(limitRateValue: number): RequestLimitRules {
        this['limit_rate_value'] = limitRateValue;
        return this;
    }
    public set limitRateValue(limitRateValue: number  | undefined) {
        this['limit_rate_value'] = limitRateValue;
    }
    public get limitRateValue(): number | undefined {
        return this['limit_rate_value'];
    }
    public withLimitTime(limitTime: string): RequestLimitRules {
        this['limit_time'] = limitTime;
        return this;
    }
    public set limitTime(limitTime: string  | undefined) {
        this['limit_time'] = limitTime;
    }
    public get limitTime(): string | undefined {
        return this['limit_time'];
    }
}
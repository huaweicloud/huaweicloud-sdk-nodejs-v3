

export class CacheRules {
    private 'match_type': string | undefined;
    private 'match_value'?: string | undefined;
    public ttl: number;
    private 'ttl_unit': string | undefined;
    public priority: number;
    private 'follow_origin': string | undefined;
    private 'url_parameter_type': string | undefined;
    private 'url_parameter_value'?: string | undefined;
    public constructor(matchType?: any, ttl?: any, ttlUnit?: any, priority?: any, followOrigin?: any, urlParameterType?: any) { 
        this['match_type'] = matchType;
        this['ttl'] = ttl;
        this['ttl_unit'] = ttlUnit;
        this['priority'] = priority;
        this['follow_origin'] = followOrigin;
        this['url_parameter_type'] = urlParameterType;
    }
    public withMatchType(matchType: string): CacheRules {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType() {
        return this['match_type'];
    }
    public withMatchValue(matchValue: string): CacheRules {
        this['match_value'] = matchValue;
        return this;
    }
    public set matchValue(matchValue: string | undefined) {
        this['match_value'] = matchValue;
    }
    public get matchValue() {
        return this['match_value'];
    }
    public withTtl(ttl: number): CacheRules {
        this['ttl'] = ttl;
        return this;
    }
    public withTtlUnit(ttlUnit: string): CacheRules {
        this['ttl_unit'] = ttlUnit;
        return this;
    }
    public set ttlUnit(ttlUnit: string | undefined) {
        this['ttl_unit'] = ttlUnit;
    }
    public get ttlUnit() {
        return this['ttl_unit'];
    }
    public withPriority(priority: number): CacheRules {
        this['priority'] = priority;
        return this;
    }
    public withFollowOrigin(followOrigin: string): CacheRules {
        this['follow_origin'] = followOrigin;
        return this;
    }
    public set followOrigin(followOrigin: string | undefined) {
        this['follow_origin'] = followOrigin;
    }
    public get followOrigin() {
        return this['follow_origin'];
    }
    public withUrlParameterType(urlParameterType: string): CacheRules {
        this['url_parameter_type'] = urlParameterType;
        return this;
    }
    public set urlParameterType(urlParameterType: string | undefined) {
        this['url_parameter_type'] = urlParameterType;
    }
    public get urlParameterType() {
        return this['url_parameter_type'];
    }
    public withUrlParameterValue(urlParameterValue: string): CacheRules {
        this['url_parameter_value'] = urlParameterValue;
        return this;
    }
    public set urlParameterValue(urlParameterValue: string | undefined) {
        this['url_parameter_value'] = urlParameterValue;
    }
    public get urlParameterValue() {
        return this['url_parameter_value'];
    }
}
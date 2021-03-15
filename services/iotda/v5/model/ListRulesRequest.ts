

export class ListRulesRequest {
    private 'Instance-Id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'rule_type'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListRulesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListRulesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withRuleType(ruleType: string): ListRulesRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withLimit(limit: number): ListRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListRulesRequest {
        this['offset'] = offset;
        return this;
    }
}
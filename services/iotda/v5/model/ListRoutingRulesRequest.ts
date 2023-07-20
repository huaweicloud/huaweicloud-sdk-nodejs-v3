

export class ListRoutingRulesRequest {
    private 'Instance-Id'?: string;
    public resource?: string;
    public event?: string;
    private 'app_type'?: string;
    private 'app_id'?: string;
    private 'rule_name'?: string;
    public active?: boolean;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListRoutingRulesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withResource(resource: string): ListRoutingRulesRequest {
        this['resource'] = resource;
        return this;
    }
    public withEvent(event: string): ListRoutingRulesRequest {
        this['event'] = event;
        return this;
    }
    public withAppType(appType: string): ListRoutingRulesRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withAppId(appId: string): ListRoutingRulesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRuleName(ruleName: string): ListRoutingRulesRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withActive(active: boolean): ListRoutingRulesRequest {
        this['active'] = active;
        return this;
    }
    public withLimit(limit: number): ListRoutingRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRoutingRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListRoutingRulesRequest {
        this['offset'] = offset;
        return this;
    }
}
import { RoutingRuleSubject } from './RoutingRuleSubject';


export class AddRuleReq {
    private 'rule_name'?: string | undefined;
    public description?: string;
    public subject: RoutingRuleSubject;
    private 'app_type'?: string | undefined;
    private 'app_id'?: string | undefined;
    public select?: string;
    public where?: string;
    private 'data_version'?: string | undefined;
    public constructor(subject?: any) { 
        this['subject'] = subject;
    }
    public withRuleName(ruleName: string): AddRuleReq {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName() {
        return this['rule_name'];
    }
    public withDescription(description: string): AddRuleReq {
        this['description'] = description;
        return this;
    }
    public withSubject(subject: RoutingRuleSubject): AddRuleReq {
        this['subject'] = subject;
        return this;
    }
    public withAppType(appType: string): AddRuleReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
        return this['app_type'];
    }
    public withAppId(appId: string): AddRuleReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withSelect(select: string): AddRuleReq {
        this['select'] = select;
        return this;
    }
    public withWhere(where: string): AddRuleReq {
        this['where'] = where;
        return this;
    }
    public withDataVersion(dataVersion: string): AddRuleReq {
        this['data_version'] = dataVersion;
        return this;
    }
    public set dataVersion(dataVersion: string | undefined) {
        this['data_version'] = dataVersion;
    }
    public get dataVersion() {
        return this['data_version'];
    }
}
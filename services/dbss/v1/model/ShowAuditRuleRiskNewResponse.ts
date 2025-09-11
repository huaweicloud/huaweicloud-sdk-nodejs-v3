import { RuleRiskInfoBeanSchemas } from './RuleRiskInfoBeanSchemas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditRuleRiskNewResponse extends SdkResponse {
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    public status?: string;
    public action?: string;
    public schemas?: Array<RuleRiskInfoBeanSchemas>;
    public rank?: number;
    private 'ignore_case'?: boolean;
    private 'risk_level'?: string;
    private 'db_ids'?: string;
    private 'execution_symbol'?: string;
    private 'execution_time'?: number;
    private 'affect_symbol'?: string;
    private 'affect_rows'?: number;
    private 'client_ips'?: string;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ShowAuditRuleRiskNewResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): ShowAuditRuleRiskNewResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withStatus(status: string): ShowAuditRuleRiskNewResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): ShowAuditRuleRiskNewResponse {
        this['action'] = action;
        return this;
    }
    public withSchemas(schemas: Array<RuleRiskInfoBeanSchemas>): ShowAuditRuleRiskNewResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withRank(rank: number): ShowAuditRuleRiskNewResponse {
        this['rank'] = rank;
        return this;
    }
    public withIgnoreCase(ignoreCase: boolean): ShowAuditRuleRiskNewResponse {
        this['ignore_case'] = ignoreCase;
        return this;
    }
    public set ignoreCase(ignoreCase: boolean  | undefined) {
        this['ignore_case'] = ignoreCase;
    }
    public get ignoreCase(): boolean | undefined {
        return this['ignore_case'];
    }
    public withRiskLevel(riskLevel: string): ShowAuditRuleRiskNewResponse {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withDbIds(dbIds: string): ShowAuditRuleRiskNewResponse {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withExecutionSymbol(executionSymbol: string): ShowAuditRuleRiskNewResponse {
        this['execution_symbol'] = executionSymbol;
        return this;
    }
    public set executionSymbol(executionSymbol: string  | undefined) {
        this['execution_symbol'] = executionSymbol;
    }
    public get executionSymbol(): string | undefined {
        return this['execution_symbol'];
    }
    public withExecutionTime(executionTime: number): ShowAuditRuleRiskNewResponse {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withAffectSymbol(affectSymbol: string): ShowAuditRuleRiskNewResponse {
        this['affect_symbol'] = affectSymbol;
        return this;
    }
    public set affectSymbol(affectSymbol: string  | undefined) {
        this['affect_symbol'] = affectSymbol;
    }
    public get affectSymbol(): string | undefined {
        return this['affect_symbol'];
    }
    public withAffectRows(affectRows: number): ShowAuditRuleRiskNewResponse {
        this['affect_rows'] = affectRows;
        return this;
    }
    public set affectRows(affectRows: number  | undefined) {
        this['affect_rows'] = affectRows;
    }
    public get affectRows(): number | undefined {
        return this['affect_rows'];
    }
    public withClientIps(clientIps: string): ShowAuditRuleRiskNewResponse {
        this['client_ips'] = clientIps;
        return this;
    }
    public set clientIps(clientIps: string  | undefined) {
        this['client_ips'] = clientIps;
    }
    public get clientIps(): string | undefined {
        return this['client_ips'];
    }
}
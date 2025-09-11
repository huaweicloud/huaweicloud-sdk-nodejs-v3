import { SchemaBean } from './SchemaBean';


export class RuleAddRiskRuleRequest {
    public action?: string;
    private 'affect_rows'?: number;
    private 'affect_symbol'?: string;
    private 'client_ips'?: string;
    private 'db_ids'?: string;
    private 'exception_ips'?: string;
    private 'execution_symbol'?: string;
    private 'execution_time'?: number;
    private 'ignore_case'?: boolean;
    private 'risk_level'?: string;
    private 'rule_name'?: string;
    public schemas?: Array<SchemaBean>;
    public status?: string;
    public constructor(affectRows?: number, affectSymbol?: string, executionSymbol?: string, executionTime?: number, riskLevel?: string, ruleName?: string, status?: string) { 
        this['affect_rows'] = affectRows;
        this['affect_symbol'] = affectSymbol;
        this['execution_symbol'] = executionSymbol;
        this['execution_time'] = executionTime;
        this['risk_level'] = riskLevel;
        this['rule_name'] = ruleName;
        this['status'] = status;
    }
    public withAction(action: string): RuleAddRiskRuleRequest {
        this['action'] = action;
        return this;
    }
    public withAffectRows(affectRows: number): RuleAddRiskRuleRequest {
        this['affect_rows'] = affectRows;
        return this;
    }
    public set affectRows(affectRows: number  | undefined) {
        this['affect_rows'] = affectRows;
    }
    public get affectRows(): number | undefined {
        return this['affect_rows'];
    }
    public withAffectSymbol(affectSymbol: string): RuleAddRiskRuleRequest {
        this['affect_symbol'] = affectSymbol;
        return this;
    }
    public set affectSymbol(affectSymbol: string  | undefined) {
        this['affect_symbol'] = affectSymbol;
    }
    public get affectSymbol(): string | undefined {
        return this['affect_symbol'];
    }
    public withClientIps(clientIps: string): RuleAddRiskRuleRequest {
        this['client_ips'] = clientIps;
        return this;
    }
    public set clientIps(clientIps: string  | undefined) {
        this['client_ips'] = clientIps;
    }
    public get clientIps(): string | undefined {
        return this['client_ips'];
    }
    public withDbIds(dbIds: string): RuleAddRiskRuleRequest {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withExceptionIps(exceptionIps: string): RuleAddRiskRuleRequest {
        this['exception_ips'] = exceptionIps;
        return this;
    }
    public set exceptionIps(exceptionIps: string  | undefined) {
        this['exception_ips'] = exceptionIps;
    }
    public get exceptionIps(): string | undefined {
        return this['exception_ips'];
    }
    public withExecutionSymbol(executionSymbol: string): RuleAddRiskRuleRequest {
        this['execution_symbol'] = executionSymbol;
        return this;
    }
    public set executionSymbol(executionSymbol: string  | undefined) {
        this['execution_symbol'] = executionSymbol;
    }
    public get executionSymbol(): string | undefined {
        return this['execution_symbol'];
    }
    public withExecutionTime(executionTime: number): RuleAddRiskRuleRequest {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withIgnoreCase(ignoreCase: boolean): RuleAddRiskRuleRequest {
        this['ignore_case'] = ignoreCase;
        return this;
    }
    public set ignoreCase(ignoreCase: boolean  | undefined) {
        this['ignore_case'] = ignoreCase;
    }
    public get ignoreCase(): boolean | undefined {
        return this['ignore_case'];
    }
    public withRiskLevel(riskLevel: string): RuleAddRiskRuleRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRuleName(ruleName: string): RuleAddRiskRuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSchemas(schemas: Array<SchemaBean>): RuleAddRiskRuleRequest {
        this['schemas'] = schemas;
        return this;
    }
    public withStatus(status: string): RuleAddRiskRuleRequest {
        this['status'] = status;
        return this;
    }
}
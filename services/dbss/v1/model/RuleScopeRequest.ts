

export class RuleScopeRequest {
    public action?: string;
    private 'db_ids'?: string;
    private 'db_names'?: string;
    private 'db_users'?: string;
    private 'exception_ips'?: string;
    private 'rule_name'?: string;
    private 'source_ips'?: string;
    private 'source_ports'?: string;
    public constructor(dbIds?: string, dbNames?: string, ruleName?: string) { 
        this['db_ids'] = dbIds;
        this['db_names'] = dbNames;
        this['rule_name'] = ruleName;
    }
    public withAction(action: string): RuleScopeRequest {
        this['action'] = action;
        return this;
    }
    public withDbIds(dbIds: string): RuleScopeRequest {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withDbNames(dbNames: string): RuleScopeRequest {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: string  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): string | undefined {
        return this['db_names'];
    }
    public withDbUsers(dbUsers: string): RuleScopeRequest {
        this['db_users'] = dbUsers;
        return this;
    }
    public set dbUsers(dbUsers: string  | undefined) {
        this['db_users'] = dbUsers;
    }
    public get dbUsers(): string | undefined {
        return this['db_users'];
    }
    public withExceptionIps(exceptionIps: string): RuleScopeRequest {
        this['exception_ips'] = exceptionIps;
        return this;
    }
    public set exceptionIps(exceptionIps: string  | undefined) {
        this['exception_ips'] = exceptionIps;
    }
    public get exceptionIps(): string | undefined {
        return this['exception_ips'];
    }
    public withRuleName(ruleName: string): RuleScopeRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSourceIps(sourceIps: string): RuleScopeRequest {
        this['source_ips'] = sourceIps;
        return this;
    }
    public set sourceIps(sourceIps: string  | undefined) {
        this['source_ips'] = sourceIps;
    }
    public get sourceIps(): string | undefined {
        return this['source_ips'];
    }
    public withSourcePorts(sourcePorts: string): RuleScopeRequest {
        this['source_ports'] = sourcePorts;
        return this;
    }
    public set sourcePorts(sourcePorts: string  | undefined) {
        this['source_ports'] = sourcePorts;
    }
    public get sourcePorts(): string | undefined {
        return this['source_ports'];
    }
}


export class RuleScopeInfo {
    public id?: string;
    public name?: string;
    public action?: string;
    public status?: string;
    private 'exception_ips'?: string;
    private 'source_ips'?: string;
    private 'source_ports'?: string;
    private 'db_ids'?: string;
    private 'db_names'?: string;
    private 'db_users'?: string;
    private 'all_audit'?: boolean;
    public constructor() { 
    }
    public withId(id: string): RuleScopeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RuleScopeInfo {
        this['name'] = name;
        return this;
    }
    public withAction(action: string): RuleScopeInfo {
        this['action'] = action;
        return this;
    }
    public withStatus(status: string): RuleScopeInfo {
        this['status'] = status;
        return this;
    }
    public withExceptionIps(exceptionIps: string): RuleScopeInfo {
        this['exception_ips'] = exceptionIps;
        return this;
    }
    public set exceptionIps(exceptionIps: string  | undefined) {
        this['exception_ips'] = exceptionIps;
    }
    public get exceptionIps(): string | undefined {
        return this['exception_ips'];
    }
    public withSourceIps(sourceIps: string): RuleScopeInfo {
        this['source_ips'] = sourceIps;
        return this;
    }
    public set sourceIps(sourceIps: string  | undefined) {
        this['source_ips'] = sourceIps;
    }
    public get sourceIps(): string | undefined {
        return this['source_ips'];
    }
    public withSourcePorts(sourcePorts: string): RuleScopeInfo {
        this['source_ports'] = sourcePorts;
        return this;
    }
    public set sourcePorts(sourcePorts: string  | undefined) {
        this['source_ports'] = sourcePorts;
    }
    public get sourcePorts(): string | undefined {
        return this['source_ports'];
    }
    public withDbIds(dbIds: string): RuleScopeInfo {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withDbNames(dbNames: string): RuleScopeInfo {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: string  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): string | undefined {
        return this['db_names'];
    }
    public withDbUsers(dbUsers: string): RuleScopeInfo {
        this['db_users'] = dbUsers;
        return this;
    }
    public set dbUsers(dbUsers: string  | undefined) {
        this['db_users'] = dbUsers;
    }
    public get dbUsers(): string | undefined {
        return this['db_users'];
    }
    public withAllAudit(allAudit: boolean): RuleScopeInfo {
        this['all_audit'] = allAudit;
        return this;
    }
    public set allAudit(allAudit: boolean  | undefined) {
        this['all_audit'] = allAudit;
    }
    public get allAudit(): boolean | undefined {
        return this['all_audit'];
    }
}
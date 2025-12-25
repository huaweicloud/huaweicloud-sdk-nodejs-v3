

export class ListAlertRulesRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListAlertRulesRequestSortDirEnum | string;
    private 'pipe_id'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    public status?: Array<ListAlertRulesRequestStatusEnum> | Array<string>;
    public severity?: Array<ListAlertRulesRequestSeverityEnum> | Array<string>;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListAlertRulesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListAlertRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlertRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListAlertRulesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListAlertRulesRequestSortDirEnum | string): ListAlertRulesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListAlertRulesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListAlertRulesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withPipeId(pipeId: string): ListAlertRulesRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withRuleName(ruleName: string): ListAlertRulesRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): ListAlertRulesRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withStatus(status: Array<ListAlertRulesRequestStatusEnum> | Array<string>): ListAlertRulesRequest {
        this['status'] = status;
        return this;
    }
    public withSeverity(severity: Array<ListAlertRulesRequestSeverityEnum> | Array<string>): ListAlertRulesRequest {
        this['severity'] = severity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlertRulesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRulesRequestStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRulesRequestSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}

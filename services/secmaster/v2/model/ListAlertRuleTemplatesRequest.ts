

export class ListAlertRuleTemplatesRequest {
    private 'workspace_id'?: string;
    private 'template_name'?: string;
    public status?: ListAlertRuleTemplatesRequestStatusEnum | string;
    public severity?: ListAlertRuleTemplatesRequestSeverityEnum | string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListAlertRuleTemplatesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTemplateName(templateName: string): ListAlertRuleTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withStatus(status: ListAlertRuleTemplatesRequestStatusEnum | string): ListAlertRuleTemplatesRequest {
        this['status'] = status;
        return this;
    }
    public withSeverity(severity: ListAlertRuleTemplatesRequestSeverityEnum | string): ListAlertRuleTemplatesRequest {
        this['severity'] = severity;
        return this;
    }
    public withOffset(offset: number): ListAlertRuleTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlertRuleTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListAlertRuleTemplatesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAlertRuleTemplatesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlertRuleTemplatesRequestStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlertRuleTemplatesRequestSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}

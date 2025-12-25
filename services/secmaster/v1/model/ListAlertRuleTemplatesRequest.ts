

export class ListAlertRuleTemplatesRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListAlertRuleTemplatesRequestSortDirEnum | string;
    public severity?: Array<ListAlertRuleTemplatesRequestSeverityEnum> | Array<string>;
    public constructor(workspaceId?: string, offset?: number, limit?: number) { 
        this['workspace_id'] = workspaceId;
        this['offset'] = offset;
        this['limit'] = limit;
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
    public withSortDir(sortDir: ListAlertRuleTemplatesRequestSortDirEnum | string): ListAlertRuleTemplatesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListAlertRuleTemplatesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListAlertRuleTemplatesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSeverity(severity: Array<ListAlertRuleTemplatesRequestSeverityEnum> | Array<string>): ListAlertRuleTemplatesRequest {
        this['severity'] = severity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlertRuleTemplatesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
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

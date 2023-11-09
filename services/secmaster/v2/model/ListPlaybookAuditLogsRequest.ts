import { AuditLogInfo } from './AuditLogInfo';


export class ListPlaybookAuditLogsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListPlaybookAuditLogsRequestSortDirEnum | string;
    public body?: AuditLogInfo;
    public constructor(contentType?: string, workspaceId?: string, offset?: number, limit?: number) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withContentType(contentType: string): ListPlaybookAuditLogsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybookAuditLogsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListPlaybookAuditLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPlaybookAuditLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPlaybookAuditLogsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListPlaybookAuditLogsRequestSortDirEnum | string): ListPlaybookAuditLogsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListPlaybookAuditLogsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListPlaybookAuditLogsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withBody(body: AuditLogInfo): ListPlaybookAuditLogsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPlaybookAuditLogsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}

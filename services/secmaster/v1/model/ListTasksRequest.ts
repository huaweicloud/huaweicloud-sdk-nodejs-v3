

export class ListTasksRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public note?: string;
    public name?: string;
    private 'business_type'?: ListTasksRequestBusinessTypeEnum | string;
    private 'creator_name'?: string;
    private 'query_type'?: ListTasksRequestQueryTypeEnum | string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListTasksRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): ListTasksRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListTasksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListTasksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withNote(note: string): ListTasksRequest {
        this['note'] = note;
        return this;
    }
    public withName(name: string): ListTasksRequest {
        this['name'] = name;
        return this;
    }
    public withBusinessType(businessType: ListTasksRequestBusinessTypeEnum | string): ListTasksRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: ListTasksRequestBusinessTypeEnum | string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): ListTasksRequestBusinessTypeEnum | string | undefined {
        return this['business_type'];
    }
    public withCreatorName(creatorName: string): ListTasksRequest {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withQueryType(queryType: ListTasksRequestQueryTypeEnum | string): ListTasksRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ListTasksRequestQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ListTasksRequestQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withFromDate(fromDate: string): ListTasksRequest {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ListTasksRequest {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestBusinessTypeEnum {
    WORKFLOWPUBLISH = 'WORKFLOWPUBLISH',
    WORKFLOWNODEAPPROVE = 'WORKFLOWNODEAPPROVE',
    PLAYBOOKPUBLISH = 'PLAYBOOKPUBLISH',
    PLAYBOOKNODEAPPROVE = 'PLAYBOOKNODEAPPROVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestQueryTypeEnum {
    MY_TODO = 'my_todo',
    ALL_HANDLED = 'all_handled'
}

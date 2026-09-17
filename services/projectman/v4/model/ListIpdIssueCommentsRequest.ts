

export class ListIpdIssueCommentsRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'date_desc'?: boolean;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public category?: ListIpdIssueCommentsRequestCategoryEnum | string;
    public constructor(projectId?: string, issueId?: string, pageNo?: number, pageSize?: number) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withProjectId(projectId: string): ListIpdIssueCommentsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): ListIpdIssueCommentsRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withDateDesc(dateDesc: boolean): ListIpdIssueCommentsRequest {
        this['date_desc'] = dateDesc;
        return this;
    }
    public set dateDesc(dateDesc: boolean  | undefined) {
        this['date_desc'] = dateDesc;
    }
    public get dateDesc(): boolean | undefined {
        return this['date_desc'];
    }
    public withPageNo(pageNo: number): ListIpdIssueCommentsRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListIpdIssueCommentsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withCategory(category: ListIpdIssueCommentsRequestCategoryEnum | string): ListIpdIssueCommentsRequest {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListIpdIssueCommentsRequestCategoryEnum {
    COMMENT = 'comment',
    REPLY = 'reply',
    OPERATION = 'operation'
}



export class ListSecurityApprovalsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'proposer_name'?: string;
    private 'approval_id'?: string;
    private 'workspace_id'?: string;
    private 'status_list'?: Array<number>;
    private 'application_start_time'?: number;
    private 'application_end_time'?: number;
    private 'order_by_desc'?: boolean;
    private 'order_by'?: ListSecurityApprovalsRequestOrderByEnum | string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityApprovalsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityApprovalsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityApprovalsRequest {
        this['offset'] = offset;
        return this;
    }
    public withProposerName(proposerName: string): ListSecurityApprovalsRequest {
        this['proposer_name'] = proposerName;
        return this;
    }
    public set proposerName(proposerName: string  | undefined) {
        this['proposer_name'] = proposerName;
    }
    public get proposerName(): string | undefined {
        return this['proposer_name'];
    }
    public withApprovalId(approvalId: string): ListSecurityApprovalsRequest {
        this['approval_id'] = approvalId;
        return this;
    }
    public set approvalId(approvalId: string  | undefined) {
        this['approval_id'] = approvalId;
    }
    public get approvalId(): string | undefined {
        return this['approval_id'];
    }
    public withWorkspaceId(workspaceId: string): ListSecurityApprovalsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withStatusList(statusList: Array<number>): ListSecurityApprovalsRequest {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<number>  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): Array<number> | undefined {
        return this['status_list'];
    }
    public withApplicationStartTime(applicationStartTime: number): ListSecurityApprovalsRequest {
        this['application_start_time'] = applicationStartTime;
        return this;
    }
    public set applicationStartTime(applicationStartTime: number  | undefined) {
        this['application_start_time'] = applicationStartTime;
    }
    public get applicationStartTime(): number | undefined {
        return this['application_start_time'];
    }
    public withApplicationEndTime(applicationEndTime: number): ListSecurityApprovalsRequest {
        this['application_end_time'] = applicationEndTime;
        return this;
    }
    public set applicationEndTime(applicationEndTime: number  | undefined) {
        this['application_end_time'] = applicationEndTime;
    }
    public get applicationEndTime(): number | undefined {
        return this['application_end_time'];
    }
    public withOrderByDesc(orderByDesc: boolean): ListSecurityApprovalsRequest {
        this['order_by_desc'] = orderByDesc;
        return this;
    }
    public set orderByDesc(orderByDesc: boolean  | undefined) {
        this['order_by_desc'] = orderByDesc;
    }
    public get orderByDesc(): boolean | undefined {
        return this['order_by_desc'];
    }
    public withOrderBy(orderBy: ListSecurityApprovalsRequestOrderByEnum | string): ListSecurityApprovalsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityApprovalsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityApprovalsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityApprovalsRequestOrderByEnum {
    START_TIME = 'START_TIME',
    END_TIME = 'END_TIME'
}

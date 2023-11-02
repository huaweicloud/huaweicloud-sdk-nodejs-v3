

export class SearchApprovalsRequest {
    public workspace?: string;
    private 'biz_id'?: number;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    private 'approval_status'?: SearchApprovalsRequestApprovalStatusEnum | string;
    private 'approval_status_detail'?: SearchApprovalsRequestApprovalStatusDetailEnum | string;
    private 'approval_type'?: SearchApprovalsRequestApprovalTypeEnum | string;
    private 'biz_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchApprovalsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBizId(bizId: number): SearchApprovalsRequest {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withName(name: string): SearchApprovalsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchApprovalsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): SearchApprovalsRequest {
        this['approver'] = approver;
        return this;
    }
    public withApprovalStatus(approvalStatus: SearchApprovalsRequestApprovalStatusEnum | string): SearchApprovalsRequest {
        this['approval_status'] = approvalStatus;
        return this;
    }
    public set approvalStatus(approvalStatus: SearchApprovalsRequestApprovalStatusEnum | string  | undefined) {
        this['approval_status'] = approvalStatus;
    }
    public get approvalStatus(): SearchApprovalsRequestApprovalStatusEnum | string | undefined {
        return this['approval_status'];
    }
    public withApprovalStatusDetail(approvalStatusDetail: SearchApprovalsRequestApprovalStatusDetailEnum | string): SearchApprovalsRequest {
        this['approval_status_detail'] = approvalStatusDetail;
        return this;
    }
    public set approvalStatusDetail(approvalStatusDetail: SearchApprovalsRequestApprovalStatusDetailEnum | string  | undefined) {
        this['approval_status_detail'] = approvalStatusDetail;
    }
    public get approvalStatusDetail(): SearchApprovalsRequestApprovalStatusDetailEnum | string | undefined {
        return this['approval_status_detail'];
    }
    public withApprovalType(approvalType: SearchApprovalsRequestApprovalTypeEnum | string): SearchApprovalsRequest {
        this['approval_type'] = approvalType;
        return this;
    }
    public set approvalType(approvalType: SearchApprovalsRequestApprovalTypeEnum | string  | undefined) {
        this['approval_type'] = approvalType;
    }
    public get approvalType(): SearchApprovalsRequestApprovalTypeEnum | string | undefined {
        return this['approval_type'];
    }
    public withBizType(bizType: string): SearchApprovalsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
    public withBeginTime(beginTime: string): SearchApprovalsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchApprovalsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchApprovalsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchApprovalsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchApprovalsRequestApprovalStatusEnum {
    DEVELOPING = 'DEVELOPING',
    FINISHED = 'FINISHED'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchApprovalsRequestApprovalStatusDetailEnum {
    DEVELOPING = 'DEVELOPING',
    APPROVED = 'APPROVED',
    REJECT = 'REJECT'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchApprovalsRequestApprovalTypeEnum {
    PUBLISH = 'PUBLISH',
    OFFLINE = 'OFFLINE'
}

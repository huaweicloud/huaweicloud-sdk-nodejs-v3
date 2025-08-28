

export class OpExternalInfo {
    private 'review_id_list'?: Array<string>;
    private 'algorithm_failure_reason'?: string;
    private 'admin_audit_failure_reason'?: string;
    public constructor() { 
    }
    public withReviewIdList(reviewIdList: Array<string>): OpExternalInfo {
        this['review_id_list'] = reviewIdList;
        return this;
    }
    public set reviewIdList(reviewIdList: Array<string>  | undefined) {
        this['review_id_list'] = reviewIdList;
    }
    public get reviewIdList(): Array<string> | undefined {
        return this['review_id_list'];
    }
    public withAlgorithmFailureReason(algorithmFailureReason: string): OpExternalInfo {
        this['algorithm_failure_reason'] = algorithmFailureReason;
        return this;
    }
    public set algorithmFailureReason(algorithmFailureReason: string  | undefined) {
        this['algorithm_failure_reason'] = algorithmFailureReason;
    }
    public get algorithmFailureReason(): string | undefined {
        return this['algorithm_failure_reason'];
    }
    public withAdminAuditFailureReason(adminAuditFailureReason: string): OpExternalInfo {
        this['admin_audit_failure_reason'] = adminAuditFailureReason;
        return this;
    }
    public set adminAuditFailureReason(adminAuditFailureReason: string  | undefined) {
        this['admin_audit_failure_reason'] = adminAuditFailureReason;
    }
    public get adminAuditFailureReason(): string | undefined {
        return this['admin_audit_failure_reason'];
    }
}


export class ProcessInstanceResponseResultReviewConfig {
    private 'approval_type'?: number;
    private 'ratio_value'?: string;
    private 'skip_decisioning'?: boolean;
    private 'approval_roles'?: string;
    private 'review_roles'?: string;
    public constructor() { 
    }
    public withApprovalType(approvalType: number): ProcessInstanceResponseResultReviewConfig {
        this['approval_type'] = approvalType;
        return this;
    }
    public set approvalType(approvalType: number  | undefined) {
        this['approval_type'] = approvalType;
    }
    public get approvalType(): number | undefined {
        return this['approval_type'];
    }
    public withRatioValue(ratioValue: string): ProcessInstanceResponseResultReviewConfig {
        this['ratio_value'] = ratioValue;
        return this;
    }
    public set ratioValue(ratioValue: string  | undefined) {
        this['ratio_value'] = ratioValue;
    }
    public get ratioValue(): string | undefined {
        return this['ratio_value'];
    }
    public withSkipDecisioning(skipDecisioning: boolean): ProcessInstanceResponseResultReviewConfig {
        this['skip_decisioning'] = skipDecisioning;
        return this;
    }
    public set skipDecisioning(skipDecisioning: boolean  | undefined) {
        this['skip_decisioning'] = skipDecisioning;
    }
    public get skipDecisioning(): boolean | undefined {
        return this['skip_decisioning'];
    }
    public withApprovalRoles(approvalRoles: string): ProcessInstanceResponseResultReviewConfig {
        this['approval_roles'] = approvalRoles;
        return this;
    }
    public set approvalRoles(approvalRoles: string  | undefined) {
        this['approval_roles'] = approvalRoles;
    }
    public get approvalRoles(): string | undefined {
        return this['approval_roles'];
    }
    public withReviewRoles(reviewRoles: string): ProcessInstanceResponseResultReviewConfig {
        this['review_roles'] = reviewRoles;
        return this;
    }
    public set reviewRoles(reviewRoles: string  | undefined) {
        this['review_roles'] = reviewRoles;
    }
    public get reviewRoles(): string | undefined {
        return this['review_roles'];
    }
}


export class CreateMergeRequestApproverSettingDto {
    public target?: string;
    private 'is_use_approval'?: boolean;
    private 'approval_required_approvers'?: number;
    private 'approval_required_reviewers'?: number;
    private 'reset_approvals_on_push'?: boolean;
    private 'reset_reviewers_on_push'?: boolean;
    private 'approvers_from_project'?: boolean;
    private 'append_reviewer_ids'?: Array<number>;
    private 'append_approver_ids'?: Array<number>;
    private 'only_merge_when_pipeline_pass'?: boolean;
    private 'assignee_ids'?: Array<number>;
    private 'approver_ids'?: Array<number>;
    private 'reviewer_ids'?: Array<number>;
    public constructor() { 
    }
    public withTarget(target: string): CreateMergeRequestApproverSettingDto {
        this['target'] = target;
        return this;
    }
    public withIsUseApproval(isUseApproval: boolean): CreateMergeRequestApproverSettingDto {
        this['is_use_approval'] = isUseApproval;
        return this;
    }
    public set isUseApproval(isUseApproval: boolean  | undefined) {
        this['is_use_approval'] = isUseApproval;
    }
    public get isUseApproval(): boolean | undefined {
        return this['is_use_approval'];
    }
    public withApprovalRequiredApprovers(approvalRequiredApprovers: number): CreateMergeRequestApproverSettingDto {
        this['approval_required_approvers'] = approvalRequiredApprovers;
        return this;
    }
    public set approvalRequiredApprovers(approvalRequiredApprovers: number  | undefined) {
        this['approval_required_approvers'] = approvalRequiredApprovers;
    }
    public get approvalRequiredApprovers(): number | undefined {
        return this['approval_required_approvers'];
    }
    public withApprovalRequiredReviewers(approvalRequiredReviewers: number): CreateMergeRequestApproverSettingDto {
        this['approval_required_reviewers'] = approvalRequiredReviewers;
        return this;
    }
    public set approvalRequiredReviewers(approvalRequiredReviewers: number  | undefined) {
        this['approval_required_reviewers'] = approvalRequiredReviewers;
    }
    public get approvalRequiredReviewers(): number | undefined {
        return this['approval_required_reviewers'];
    }
    public withResetApprovalsOnPush(resetApprovalsOnPush: boolean): CreateMergeRequestApproverSettingDto {
        this['reset_approvals_on_push'] = resetApprovalsOnPush;
        return this;
    }
    public set resetApprovalsOnPush(resetApprovalsOnPush: boolean  | undefined) {
        this['reset_approvals_on_push'] = resetApprovalsOnPush;
    }
    public get resetApprovalsOnPush(): boolean | undefined {
        return this['reset_approvals_on_push'];
    }
    public withResetReviewersOnPush(resetReviewersOnPush: boolean): CreateMergeRequestApproverSettingDto {
        this['reset_reviewers_on_push'] = resetReviewersOnPush;
        return this;
    }
    public set resetReviewersOnPush(resetReviewersOnPush: boolean  | undefined) {
        this['reset_reviewers_on_push'] = resetReviewersOnPush;
    }
    public get resetReviewersOnPush(): boolean | undefined {
        return this['reset_reviewers_on_push'];
    }
    public withApproversFromProject(approversFromProject: boolean): CreateMergeRequestApproverSettingDto {
        this['approvers_from_project'] = approversFromProject;
        return this;
    }
    public set approversFromProject(approversFromProject: boolean  | undefined) {
        this['approvers_from_project'] = approversFromProject;
    }
    public get approversFromProject(): boolean | undefined {
        return this['approvers_from_project'];
    }
    public withAppendReviewerIds(appendReviewerIds: Array<number>): CreateMergeRequestApproverSettingDto {
        this['append_reviewer_ids'] = appendReviewerIds;
        return this;
    }
    public set appendReviewerIds(appendReviewerIds: Array<number>  | undefined) {
        this['append_reviewer_ids'] = appendReviewerIds;
    }
    public get appendReviewerIds(): Array<number> | undefined {
        return this['append_reviewer_ids'];
    }
    public withAppendApproverIds(appendApproverIds: Array<number>): CreateMergeRequestApproverSettingDto {
        this['append_approver_ids'] = appendApproverIds;
        return this;
    }
    public set appendApproverIds(appendApproverIds: Array<number>  | undefined) {
        this['append_approver_ids'] = appendApproverIds;
    }
    public get appendApproverIds(): Array<number> | undefined {
        return this['append_approver_ids'];
    }
    public withOnlyMergeWhenPipelinePass(onlyMergeWhenPipelinePass: boolean): CreateMergeRequestApproverSettingDto {
        this['only_merge_when_pipeline_pass'] = onlyMergeWhenPipelinePass;
        return this;
    }
    public set onlyMergeWhenPipelinePass(onlyMergeWhenPipelinePass: boolean  | undefined) {
        this['only_merge_when_pipeline_pass'] = onlyMergeWhenPipelinePass;
    }
    public get onlyMergeWhenPipelinePass(): boolean | undefined {
        return this['only_merge_when_pipeline_pass'];
    }
    public withAssigneeIds(assigneeIds: Array<number>): CreateMergeRequestApproverSettingDto {
        this['assignee_ids'] = assigneeIds;
        return this;
    }
    public set assigneeIds(assigneeIds: Array<number>  | undefined) {
        this['assignee_ids'] = assigneeIds;
    }
    public get assigneeIds(): Array<number> | undefined {
        return this['assignee_ids'];
    }
    public withApproverIds(approverIds: Array<number>): CreateMergeRequestApproverSettingDto {
        this['approver_ids'] = approverIds;
        return this;
    }
    public set approverIds(approverIds: Array<number>  | undefined) {
        this['approver_ids'] = approverIds;
    }
    public get approverIds(): Array<number> | undefined {
        return this['approver_ids'];
    }
    public withReviewerIds(reviewerIds: Array<number>): CreateMergeRequestApproverSettingDto {
        this['reviewer_ids'] = reviewerIds;
        return this;
    }
    public set reviewerIds(reviewerIds: Array<number>  | undefined) {
        this['reviewer_ids'] = reviewerIds;
    }
    public get reviewerIds(): Array<number> | undefined {
        return this['reviewer_ids'];
    }
}
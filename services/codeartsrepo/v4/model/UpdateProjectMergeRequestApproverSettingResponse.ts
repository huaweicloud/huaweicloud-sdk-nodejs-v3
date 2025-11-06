import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProjectMergeRequestApproverSettingResponse extends SdkResponse {
    public id?: string;
    public target?: string;
    private 'target_type'?: UpdateProjectMergeRequestApproverSettingResponseTargetTypeEnum | string;
    private 'is_use_approval'?: boolean;
    private 'approval_required_reviewers'?: number;
    private 'approval_required_approvers'?: number;
    private 'reset_approvals_on_push'?: boolean;
    private 'reset_reviewers_on_push'?: boolean;
    private 'approvers_from_project'?: boolean;
    private 'append_reviewer_ids'?: Array<number>;
    private 'append_reviewers'?: Array<UserBasicDto>;
    private 'append_approver_ids'?: Array<number>;
    private 'append_approvers'?: Array<UserBasicDto>;
    private 'only_merge_when_pipeline_pass'?: boolean;
    private 'assignee_ids'?: Array<number>;
    public assignees?: Array<UserBasicDto>;
    private 'approver_ids'?: Array<number>;
    public approvers?: Array<UserBasicDto>;
    private 'reviewer_ids'?: Array<number>;
    public reviewers?: Array<UserBasicDto>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateProjectMergeRequestApproverSettingResponse {
        this['id'] = id;
        return this;
    }
    public withTarget(target: string): UpdateProjectMergeRequestApproverSettingResponse {
        this['target'] = target;
        return this;
    }
    public withTargetType(targetType: UpdateProjectMergeRequestApproverSettingResponseTargetTypeEnum | string): UpdateProjectMergeRequestApproverSettingResponse {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: UpdateProjectMergeRequestApproverSettingResponseTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): UpdateProjectMergeRequestApproverSettingResponseTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
    public withIsUseApproval(isUseApproval: boolean): UpdateProjectMergeRequestApproverSettingResponse {
        this['is_use_approval'] = isUseApproval;
        return this;
    }
    public set isUseApproval(isUseApproval: boolean  | undefined) {
        this['is_use_approval'] = isUseApproval;
    }
    public get isUseApproval(): boolean | undefined {
        return this['is_use_approval'];
    }
    public withApprovalRequiredReviewers(approvalRequiredReviewers: number): UpdateProjectMergeRequestApproverSettingResponse {
        this['approval_required_reviewers'] = approvalRequiredReviewers;
        return this;
    }
    public set approvalRequiredReviewers(approvalRequiredReviewers: number  | undefined) {
        this['approval_required_reviewers'] = approvalRequiredReviewers;
    }
    public get approvalRequiredReviewers(): number | undefined {
        return this['approval_required_reviewers'];
    }
    public withApprovalRequiredApprovers(approvalRequiredApprovers: number): UpdateProjectMergeRequestApproverSettingResponse {
        this['approval_required_approvers'] = approvalRequiredApprovers;
        return this;
    }
    public set approvalRequiredApprovers(approvalRequiredApprovers: number  | undefined) {
        this['approval_required_approvers'] = approvalRequiredApprovers;
    }
    public get approvalRequiredApprovers(): number | undefined {
        return this['approval_required_approvers'];
    }
    public withResetApprovalsOnPush(resetApprovalsOnPush: boolean): UpdateProjectMergeRequestApproverSettingResponse {
        this['reset_approvals_on_push'] = resetApprovalsOnPush;
        return this;
    }
    public set resetApprovalsOnPush(resetApprovalsOnPush: boolean  | undefined) {
        this['reset_approvals_on_push'] = resetApprovalsOnPush;
    }
    public get resetApprovalsOnPush(): boolean | undefined {
        return this['reset_approvals_on_push'];
    }
    public withResetReviewersOnPush(resetReviewersOnPush: boolean): UpdateProjectMergeRequestApproverSettingResponse {
        this['reset_reviewers_on_push'] = resetReviewersOnPush;
        return this;
    }
    public set resetReviewersOnPush(resetReviewersOnPush: boolean  | undefined) {
        this['reset_reviewers_on_push'] = resetReviewersOnPush;
    }
    public get resetReviewersOnPush(): boolean | undefined {
        return this['reset_reviewers_on_push'];
    }
    public withApproversFromProject(approversFromProject: boolean): UpdateProjectMergeRequestApproverSettingResponse {
        this['approvers_from_project'] = approversFromProject;
        return this;
    }
    public set approversFromProject(approversFromProject: boolean  | undefined) {
        this['approvers_from_project'] = approversFromProject;
    }
    public get approversFromProject(): boolean | undefined {
        return this['approvers_from_project'];
    }
    public withAppendReviewerIds(appendReviewerIds: Array<number>): UpdateProjectMergeRequestApproverSettingResponse {
        this['append_reviewer_ids'] = appendReviewerIds;
        return this;
    }
    public set appendReviewerIds(appendReviewerIds: Array<number>  | undefined) {
        this['append_reviewer_ids'] = appendReviewerIds;
    }
    public get appendReviewerIds(): Array<number> | undefined {
        return this['append_reviewer_ids'];
    }
    public withAppendReviewers(appendReviewers: Array<UserBasicDto>): UpdateProjectMergeRequestApproverSettingResponse {
        this['append_reviewers'] = appendReviewers;
        return this;
    }
    public set appendReviewers(appendReviewers: Array<UserBasicDto>  | undefined) {
        this['append_reviewers'] = appendReviewers;
    }
    public get appendReviewers(): Array<UserBasicDto> | undefined {
        return this['append_reviewers'];
    }
    public withAppendApproverIds(appendApproverIds: Array<number>): UpdateProjectMergeRequestApproverSettingResponse {
        this['append_approver_ids'] = appendApproverIds;
        return this;
    }
    public set appendApproverIds(appendApproverIds: Array<number>  | undefined) {
        this['append_approver_ids'] = appendApproverIds;
    }
    public get appendApproverIds(): Array<number> | undefined {
        return this['append_approver_ids'];
    }
    public withAppendApprovers(appendApprovers: Array<UserBasicDto>): UpdateProjectMergeRequestApproverSettingResponse {
        this['append_approvers'] = appendApprovers;
        return this;
    }
    public set appendApprovers(appendApprovers: Array<UserBasicDto>  | undefined) {
        this['append_approvers'] = appendApprovers;
    }
    public get appendApprovers(): Array<UserBasicDto> | undefined {
        return this['append_approvers'];
    }
    public withOnlyMergeWhenPipelinePass(onlyMergeWhenPipelinePass: boolean): UpdateProjectMergeRequestApproverSettingResponse {
        this['only_merge_when_pipeline_pass'] = onlyMergeWhenPipelinePass;
        return this;
    }
    public set onlyMergeWhenPipelinePass(onlyMergeWhenPipelinePass: boolean  | undefined) {
        this['only_merge_when_pipeline_pass'] = onlyMergeWhenPipelinePass;
    }
    public get onlyMergeWhenPipelinePass(): boolean | undefined {
        return this['only_merge_when_pipeline_pass'];
    }
    public withAssigneeIds(assigneeIds: Array<number>): UpdateProjectMergeRequestApproverSettingResponse {
        this['assignee_ids'] = assigneeIds;
        return this;
    }
    public set assigneeIds(assigneeIds: Array<number>  | undefined) {
        this['assignee_ids'] = assigneeIds;
    }
    public get assigneeIds(): Array<number> | undefined {
        return this['assignee_ids'];
    }
    public withAssignees(assignees: Array<UserBasicDto>): UpdateProjectMergeRequestApproverSettingResponse {
        this['assignees'] = assignees;
        return this;
    }
    public withApproverIds(approverIds: Array<number>): UpdateProjectMergeRequestApproverSettingResponse {
        this['approver_ids'] = approverIds;
        return this;
    }
    public set approverIds(approverIds: Array<number>  | undefined) {
        this['approver_ids'] = approverIds;
    }
    public get approverIds(): Array<number> | undefined {
        return this['approver_ids'];
    }
    public withApprovers(approvers: Array<UserBasicDto>): UpdateProjectMergeRequestApproverSettingResponse {
        this['approvers'] = approvers;
        return this;
    }
    public withReviewerIds(reviewerIds: Array<number>): UpdateProjectMergeRequestApproverSettingResponse {
        this['reviewer_ids'] = reviewerIds;
        return this;
    }
    public set reviewerIds(reviewerIds: Array<number>  | undefined) {
        this['reviewer_ids'] = reviewerIds;
    }
    public get reviewerIds(): Array<number> | undefined {
        return this['reviewer_ids'];
    }
    public withReviewers(reviewers: Array<UserBasicDto>): UpdateProjectMergeRequestApproverSettingResponse {
        this['reviewers'] = reviewers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateProjectMergeRequestApproverSettingResponseTargetTypeEnum {
    BRANCH = 'branch',
    FILE = 'file',
    BINARY = 'binary'
}

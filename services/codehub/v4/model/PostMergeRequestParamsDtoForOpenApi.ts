

export class PostMergeRequestParamsDtoForOpenApi {
    public title?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    private 'target_repository_id'?: number;
    private 'reviewer_ids'?: string;
    private 'assignee_ids'?: string;
    private 'approval_reviewer_ids'?: string;
    private 'approval_approvers_ids'?: string;
    public description?: string;
    private 'milestone_id'?: number;
    public labels?: object;
    private 'force_remove_source_branch'?: boolean;
    public squash?: boolean;
    private 'squash_commit_message'?: string;
    private 'work_item_ids'?: Array<string>;
    private 'is_use_temp_branch'?: boolean;
    private 'only_assignee_can_merge'?: boolean;
    public constructor(title?: string, sourceBranch?: string, targetBranch?: string) { 
        this['title'] = title;
        this['source_branch'] = sourceBranch;
        this['target_branch'] = targetBranch;
    }
    public withTitle(title: string): PostMergeRequestParamsDtoForOpenApi {
        this['title'] = title;
        return this;
    }
    public withSourceBranch(sourceBranch: string): PostMergeRequestParamsDtoForOpenApi {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): PostMergeRequestParamsDtoForOpenApi {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): PostMergeRequestParamsDtoForOpenApi {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
    public withReviewerIds(reviewerIds: string): PostMergeRequestParamsDtoForOpenApi {
        this['reviewer_ids'] = reviewerIds;
        return this;
    }
    public set reviewerIds(reviewerIds: string  | undefined) {
        this['reviewer_ids'] = reviewerIds;
    }
    public get reviewerIds(): string | undefined {
        return this['reviewer_ids'];
    }
    public withAssigneeIds(assigneeIds: string): PostMergeRequestParamsDtoForOpenApi {
        this['assignee_ids'] = assigneeIds;
        return this;
    }
    public set assigneeIds(assigneeIds: string  | undefined) {
        this['assignee_ids'] = assigneeIds;
    }
    public get assigneeIds(): string | undefined {
        return this['assignee_ids'];
    }
    public withApprovalReviewerIds(approvalReviewerIds: string): PostMergeRequestParamsDtoForOpenApi {
        this['approval_reviewer_ids'] = approvalReviewerIds;
        return this;
    }
    public set approvalReviewerIds(approvalReviewerIds: string  | undefined) {
        this['approval_reviewer_ids'] = approvalReviewerIds;
    }
    public get approvalReviewerIds(): string | undefined {
        return this['approval_reviewer_ids'];
    }
    public withApprovalApproversIds(approvalApproversIds: string): PostMergeRequestParamsDtoForOpenApi {
        this['approval_approvers_ids'] = approvalApproversIds;
        return this;
    }
    public set approvalApproversIds(approvalApproversIds: string  | undefined) {
        this['approval_approvers_ids'] = approvalApproversIds;
    }
    public get approvalApproversIds(): string | undefined {
        return this['approval_approvers_ids'];
    }
    public withDescription(description: string): PostMergeRequestParamsDtoForOpenApi {
        this['description'] = description;
        return this;
    }
    public withMilestoneId(milestoneId: number): PostMergeRequestParamsDtoForOpenApi {
        this['milestone_id'] = milestoneId;
        return this;
    }
    public set milestoneId(milestoneId: number  | undefined) {
        this['milestone_id'] = milestoneId;
    }
    public get milestoneId(): number | undefined {
        return this['milestone_id'];
    }
    public withLabels(labels: object): PostMergeRequestParamsDtoForOpenApi {
        this['labels'] = labels;
        return this;
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): PostMergeRequestParamsDtoForOpenApi {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withSquash(squash: boolean): PostMergeRequestParamsDtoForOpenApi {
        this['squash'] = squash;
        return this;
    }
    public withSquashCommitMessage(squashCommitMessage: string): PostMergeRequestParamsDtoForOpenApi {
        this['squash_commit_message'] = squashCommitMessage;
        return this;
    }
    public set squashCommitMessage(squashCommitMessage: string  | undefined) {
        this['squash_commit_message'] = squashCommitMessage;
    }
    public get squashCommitMessage(): string | undefined {
        return this['squash_commit_message'];
    }
    public withWorkItemIds(workItemIds: Array<string>): PostMergeRequestParamsDtoForOpenApi {
        this['work_item_ids'] = workItemIds;
        return this;
    }
    public set workItemIds(workItemIds: Array<string>  | undefined) {
        this['work_item_ids'] = workItemIds;
    }
    public get workItemIds(): Array<string> | undefined {
        return this['work_item_ids'];
    }
    public withIsUseTempBranch(isUseTempBranch: boolean): PostMergeRequestParamsDtoForOpenApi {
        this['is_use_temp_branch'] = isUseTempBranch;
        return this;
    }
    public set isUseTempBranch(isUseTempBranch: boolean  | undefined) {
        this['is_use_temp_branch'] = isUseTempBranch;
    }
    public get isUseTempBranch(): boolean | undefined {
        return this['is_use_temp_branch'];
    }
    public withOnlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean): PostMergeRequestParamsDtoForOpenApi {
        this['only_assignee_can_merge'] = onlyAssigneeCanMerge;
        return this;
    }
    public set onlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean  | undefined) {
        this['only_assignee_can_merge'] = onlyAssigneeCanMerge;
    }
    public get onlyAssigneeCanMerge(): boolean | undefined {
        return this['only_assignee_can_merge'];
    }
}
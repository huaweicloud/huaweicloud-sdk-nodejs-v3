import { EvaluationTypeDto } from './EvaluationTypeDto';


export class MergeRequestSettingResultDto {
    public id?: number;
    private 'disable_merge_by_self'?: boolean;
    private 'disable_approve_by_self'?: boolean;
    private 'disable_review_by_self'?: boolean;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'can_force_merge'?: boolean;
    private 'disable_squash_merge'?: boolean;
    private 'must_relate_issue'?: boolean;
    private 'need_relate_issue_branches'?: string;
    private 'need_all_issues_check_passed'?: boolean;
    private 'review_mode'?: MergeRequestSettingResultDtoReviewModeEnum | string;
    private 'add_notes_after_merged'?: boolean;
    private 'merged_commit_author'?: MergeRequestSettingResultDtoMergedCommitAuthorEnum | string;
    private 'evaluation_role'?: MergeRequestSettingResultDtoEvaluationRoleEnum | number;
    private 'evaluation_merge_gate'?: boolean;
    private 'mark_auto_merged_mr_as_closed'?: boolean;
    private 'delete_source_branch_when_merged'?: boolean;
    private 'auto_squash_merge'?: boolean;
    private 'squash_merge_with_no_merge_commit'?: boolean;
    private 'only_allow_one_issue_check_passed'?: boolean;
    private 'enable_custom_evaluation'?: boolean;
    private 'evaluation_types'?: Array<EvaluationTypeDto>;
    private 'can_reopen'?: boolean;
    private 'only_allow_merge_if_all_discussions_are_resolved'?: boolean;
    private 'merge_method'?: MergeRequestSettingResultDtoMergeMethodEnum | string;
    private 'only_allow_merge_if_vote_bigger_than'?: number;
    private 'only_assignee_can_merge'?: boolean;
    public constructor() { 
    }
    public withId(id: number): MergeRequestSettingResultDto {
        this['id'] = id;
        return this;
    }
    public withDisableMergeBySelf(disableMergeBySelf: boolean): MergeRequestSettingResultDto {
        this['disable_merge_by_self'] = disableMergeBySelf;
        return this;
    }
    public set disableMergeBySelf(disableMergeBySelf: boolean  | undefined) {
        this['disable_merge_by_self'] = disableMergeBySelf;
    }
    public get disableMergeBySelf(): boolean | undefined {
        return this['disable_merge_by_self'];
    }
    public withDisableApproveBySelf(disableApproveBySelf: boolean): MergeRequestSettingResultDto {
        this['disable_approve_by_self'] = disableApproveBySelf;
        return this;
    }
    public set disableApproveBySelf(disableApproveBySelf: boolean  | undefined) {
        this['disable_approve_by_self'] = disableApproveBySelf;
    }
    public get disableApproveBySelf(): boolean | undefined {
        return this['disable_approve_by_self'];
    }
    public withDisableReviewBySelf(disableReviewBySelf: boolean): MergeRequestSettingResultDto {
        this['disable_review_by_self'] = disableReviewBySelf;
        return this;
    }
    public set disableReviewBySelf(disableReviewBySelf: boolean  | undefined) {
        this['disable_review_by_self'] = disableReviewBySelf;
    }
    public get disableReviewBySelf(): boolean | undefined {
        return this['disable_review_by_self'];
    }
    public withCreatedAt(createdAt: string): MergeRequestSettingResultDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestSettingResultDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCanForceMerge(canForceMerge: boolean): MergeRequestSettingResultDto {
        this['can_force_merge'] = canForceMerge;
        return this;
    }
    public set canForceMerge(canForceMerge: boolean  | undefined) {
        this['can_force_merge'] = canForceMerge;
    }
    public get canForceMerge(): boolean | undefined {
        return this['can_force_merge'];
    }
    public withDisableSquashMerge(disableSquashMerge: boolean): MergeRequestSettingResultDto {
        this['disable_squash_merge'] = disableSquashMerge;
        return this;
    }
    public set disableSquashMerge(disableSquashMerge: boolean  | undefined) {
        this['disable_squash_merge'] = disableSquashMerge;
    }
    public get disableSquashMerge(): boolean | undefined {
        return this['disable_squash_merge'];
    }
    public withMustRelateIssue(mustRelateIssue: boolean): MergeRequestSettingResultDto {
        this['must_relate_issue'] = mustRelateIssue;
        return this;
    }
    public set mustRelateIssue(mustRelateIssue: boolean  | undefined) {
        this['must_relate_issue'] = mustRelateIssue;
    }
    public get mustRelateIssue(): boolean | undefined {
        return this['must_relate_issue'];
    }
    public withNeedRelateIssueBranches(needRelateIssueBranches: string): MergeRequestSettingResultDto {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
        return this;
    }
    public set needRelateIssueBranches(needRelateIssueBranches: string  | undefined) {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
    }
    public get needRelateIssueBranches(): string | undefined {
        return this['need_relate_issue_branches'];
    }
    public withNeedAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean): MergeRequestSettingResultDto {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
        return this;
    }
    public set needAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean  | undefined) {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
    }
    public get needAllIssuesCheckPassed(): boolean | undefined {
        return this['need_all_issues_check_passed'];
    }
    public withReviewMode(reviewMode: MergeRequestSettingResultDtoReviewModeEnum | string): MergeRequestSettingResultDto {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: MergeRequestSettingResultDtoReviewModeEnum | string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): MergeRequestSettingResultDtoReviewModeEnum | string | undefined {
        return this['review_mode'];
    }
    public withAddNotesAfterMerged(addNotesAfterMerged: boolean): MergeRequestSettingResultDto {
        this['add_notes_after_merged'] = addNotesAfterMerged;
        return this;
    }
    public set addNotesAfterMerged(addNotesAfterMerged: boolean  | undefined) {
        this['add_notes_after_merged'] = addNotesAfterMerged;
    }
    public get addNotesAfterMerged(): boolean | undefined {
        return this['add_notes_after_merged'];
    }
    public withMergedCommitAuthor(mergedCommitAuthor: MergeRequestSettingResultDtoMergedCommitAuthorEnum | string): MergeRequestSettingResultDto {
        this['merged_commit_author'] = mergedCommitAuthor;
        return this;
    }
    public set mergedCommitAuthor(mergedCommitAuthor: MergeRequestSettingResultDtoMergedCommitAuthorEnum | string  | undefined) {
        this['merged_commit_author'] = mergedCommitAuthor;
    }
    public get mergedCommitAuthor(): MergeRequestSettingResultDtoMergedCommitAuthorEnum | string | undefined {
        return this['merged_commit_author'];
    }
    public withEvaluationRole(evaluationRole: MergeRequestSettingResultDtoEvaluationRoleEnum | number): MergeRequestSettingResultDto {
        this['evaluation_role'] = evaluationRole;
        return this;
    }
    public set evaluationRole(evaluationRole: MergeRequestSettingResultDtoEvaluationRoleEnum | number  | undefined) {
        this['evaluation_role'] = evaluationRole;
    }
    public get evaluationRole(): MergeRequestSettingResultDtoEvaluationRoleEnum | number | undefined {
        return this['evaluation_role'];
    }
    public withEvaluationMergeGate(evaluationMergeGate: boolean): MergeRequestSettingResultDto {
        this['evaluation_merge_gate'] = evaluationMergeGate;
        return this;
    }
    public set evaluationMergeGate(evaluationMergeGate: boolean  | undefined) {
        this['evaluation_merge_gate'] = evaluationMergeGate;
    }
    public get evaluationMergeGate(): boolean | undefined {
        return this['evaluation_merge_gate'];
    }
    public withMarkAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean): MergeRequestSettingResultDto {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
        return this;
    }
    public set markAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean  | undefined) {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
    }
    public get markAutoMergedMrAsClosed(): boolean | undefined {
        return this['mark_auto_merged_mr_as_closed'];
    }
    public withDeleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean): MergeRequestSettingResultDto {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
        return this;
    }
    public set deleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean  | undefined) {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
    }
    public get deleteSourceBranchWhenMerged(): boolean | undefined {
        return this['delete_source_branch_when_merged'];
    }
    public withAutoSquashMerge(autoSquashMerge: boolean): MergeRequestSettingResultDto {
        this['auto_squash_merge'] = autoSquashMerge;
        return this;
    }
    public set autoSquashMerge(autoSquashMerge: boolean  | undefined) {
        this['auto_squash_merge'] = autoSquashMerge;
    }
    public get autoSquashMerge(): boolean | undefined {
        return this['auto_squash_merge'];
    }
    public withSquashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean): MergeRequestSettingResultDto {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
        return this;
    }
    public set squashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean  | undefined) {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
    }
    public get squashMergeWithNoMergeCommit(): boolean | undefined {
        return this['squash_merge_with_no_merge_commit'];
    }
    public withOnlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean): MergeRequestSettingResultDto {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
        return this;
    }
    public set onlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean  | undefined) {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
    }
    public get onlyAllowOneIssueCheckPassed(): boolean | undefined {
        return this['only_allow_one_issue_check_passed'];
    }
    public withEnableCustomEvaluation(enableCustomEvaluation: boolean): MergeRequestSettingResultDto {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
        return this;
    }
    public set enableCustomEvaluation(enableCustomEvaluation: boolean  | undefined) {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
    }
    public get enableCustomEvaluation(): boolean | undefined {
        return this['enable_custom_evaluation'];
    }
    public withEvaluationTypes(evaluationTypes: Array<EvaluationTypeDto>): MergeRequestSettingResultDto {
        this['evaluation_types'] = evaluationTypes;
        return this;
    }
    public set evaluationTypes(evaluationTypes: Array<EvaluationTypeDto>  | undefined) {
        this['evaluation_types'] = evaluationTypes;
    }
    public get evaluationTypes(): Array<EvaluationTypeDto> | undefined {
        return this['evaluation_types'];
    }
    public withCanReopen(canReopen: boolean): MergeRequestSettingResultDto {
        this['can_reopen'] = canReopen;
        return this;
    }
    public set canReopen(canReopen: boolean  | undefined) {
        this['can_reopen'] = canReopen;
    }
    public get canReopen(): boolean | undefined {
        return this['can_reopen'];
    }
    public withOnlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean): MergeRequestSettingResultDto {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
        return this;
    }
    public set onlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean  | undefined) {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
    }
    public get onlyAllowMergeIfAllDiscussionsAreResolved(): boolean | undefined {
        return this['only_allow_merge_if_all_discussions_are_resolved'];
    }
    public withMergeMethod(mergeMethod: MergeRequestSettingResultDtoMergeMethodEnum | string): MergeRequestSettingResultDto {
        this['merge_method'] = mergeMethod;
        return this;
    }
    public set mergeMethod(mergeMethod: MergeRequestSettingResultDtoMergeMethodEnum | string  | undefined) {
        this['merge_method'] = mergeMethod;
    }
    public get mergeMethod(): MergeRequestSettingResultDtoMergeMethodEnum | string | undefined {
        return this['merge_method'];
    }
    public withOnlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number): MergeRequestSettingResultDto {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
        return this;
    }
    public set onlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number  | undefined) {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
    }
    public get onlyAllowMergeIfVoteBiggerThan(): number | undefined {
        return this['only_allow_merge_if_vote_bigger_than'];
    }
    public withOnlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean): MergeRequestSettingResultDto {
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

/**
    * @export
    * @enum {string}
    */
export enum MergeRequestSettingResultDtoReviewModeEnum {
    APPROVAL = 'approval',
    VOTE = 'vote'
}
/**
    * @export
    * @enum {string}
    */
export enum MergeRequestSettingResultDtoMergedCommitAuthorEnum {
    MERGED_BY = 'merged_by',
    CREATED_BY = 'created_by'
}
/**
    * @export
    * @enum {string}
    */
export enum MergeRequestSettingResultDtoEvaluationRoleEnum {
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_35 = 35,
    NUMBER_40 = 40
}
/**
    * @export
    * @enum {string}
    */
export enum MergeRequestSettingResultDtoMergeMethodEnum {
    MERGE = 'merge',
    REBASE_MERGE = 'rebase_merge',
    FF = 'ff'
}

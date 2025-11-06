

export class UpdateMergeRequestSettingDto {
    private 'review_mode'?: UpdateMergeRequestSettingDtoReviewModeEnum | string;
    private 'only_allow_merge_if_all_discussions_are_resolved'?: boolean;
    private 'must_relate_issue'?: boolean;
    private 'only_allow_one_issue_check_passed'?: boolean;
    private 'need_all_issues_check_passed'?: boolean;
    private 'need_relate_issue_branches'?: string;
    private 'evaluation_merge_gate'?: boolean;
    private 'evaluation_role'?: UpdateMergeRequestSettingDtoEvaluationRoleEnum | number;
    private 'disable_merge_by_self'?: boolean;
    private 'disable_approve_by_self'?: boolean;
    private 'disable_review_by_self'?: boolean;
    private 'can_force_merge'?: boolean;
    private 'add_notes_after_merged'?: boolean;
    private 'mark_auto_merged_mr_as_closed'?: boolean;
    private 'can_reopen'?: boolean;
    private 'delete_source_branch_when_merged'?: boolean;
    private 'disable_squash_merge'?: boolean;
    private 'auto_squash_merge'?: boolean;
    private 'merge_method'?: UpdateMergeRequestSettingDtoMergeMethodEnum | string;
    private 'squash_merge_with_no_merge_commit'?: boolean;
    private 'merged_commit_author'?: UpdateMergeRequestSettingDtoMergedCommitAuthorEnum | string;
    private 'enable_custom_evaluation'?: boolean;
    private 'evaluation_types'?: Array<string>;
    private 'only_allow_merge_if_vote_bigger_than'?: number;
    private 'only_assignee_can_merge'?: boolean;
    public constructor() { 
    }
    public withReviewMode(reviewMode: UpdateMergeRequestSettingDtoReviewModeEnum | string): UpdateMergeRequestSettingDto {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: UpdateMergeRequestSettingDtoReviewModeEnum | string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): UpdateMergeRequestSettingDtoReviewModeEnum | string | undefined {
        return this['review_mode'];
    }
    public withOnlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean): UpdateMergeRequestSettingDto {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
        return this;
    }
    public set onlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean  | undefined) {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
    }
    public get onlyAllowMergeIfAllDiscussionsAreResolved(): boolean | undefined {
        return this['only_allow_merge_if_all_discussions_are_resolved'];
    }
    public withMustRelateIssue(mustRelateIssue: boolean): UpdateMergeRequestSettingDto {
        this['must_relate_issue'] = mustRelateIssue;
        return this;
    }
    public set mustRelateIssue(mustRelateIssue: boolean  | undefined) {
        this['must_relate_issue'] = mustRelateIssue;
    }
    public get mustRelateIssue(): boolean | undefined {
        return this['must_relate_issue'];
    }
    public withOnlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean): UpdateMergeRequestSettingDto {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
        return this;
    }
    public set onlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean  | undefined) {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
    }
    public get onlyAllowOneIssueCheckPassed(): boolean | undefined {
        return this['only_allow_one_issue_check_passed'];
    }
    public withNeedAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean): UpdateMergeRequestSettingDto {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
        return this;
    }
    public set needAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean  | undefined) {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
    }
    public get needAllIssuesCheckPassed(): boolean | undefined {
        return this['need_all_issues_check_passed'];
    }
    public withNeedRelateIssueBranches(needRelateIssueBranches: string): UpdateMergeRequestSettingDto {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
        return this;
    }
    public set needRelateIssueBranches(needRelateIssueBranches: string  | undefined) {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
    }
    public get needRelateIssueBranches(): string | undefined {
        return this['need_relate_issue_branches'];
    }
    public withEvaluationMergeGate(evaluationMergeGate: boolean): UpdateMergeRequestSettingDto {
        this['evaluation_merge_gate'] = evaluationMergeGate;
        return this;
    }
    public set evaluationMergeGate(evaluationMergeGate: boolean  | undefined) {
        this['evaluation_merge_gate'] = evaluationMergeGate;
    }
    public get evaluationMergeGate(): boolean | undefined {
        return this['evaluation_merge_gate'];
    }
    public withEvaluationRole(evaluationRole: UpdateMergeRequestSettingDtoEvaluationRoleEnum | number): UpdateMergeRequestSettingDto {
        this['evaluation_role'] = evaluationRole;
        return this;
    }
    public set evaluationRole(evaluationRole: UpdateMergeRequestSettingDtoEvaluationRoleEnum | number  | undefined) {
        this['evaluation_role'] = evaluationRole;
    }
    public get evaluationRole(): UpdateMergeRequestSettingDtoEvaluationRoleEnum | number | undefined {
        return this['evaluation_role'];
    }
    public withDisableMergeBySelf(disableMergeBySelf: boolean): UpdateMergeRequestSettingDto {
        this['disable_merge_by_self'] = disableMergeBySelf;
        return this;
    }
    public set disableMergeBySelf(disableMergeBySelf: boolean  | undefined) {
        this['disable_merge_by_self'] = disableMergeBySelf;
    }
    public get disableMergeBySelf(): boolean | undefined {
        return this['disable_merge_by_self'];
    }
    public withDisableApproveBySelf(disableApproveBySelf: boolean): UpdateMergeRequestSettingDto {
        this['disable_approve_by_self'] = disableApproveBySelf;
        return this;
    }
    public set disableApproveBySelf(disableApproveBySelf: boolean  | undefined) {
        this['disable_approve_by_self'] = disableApproveBySelf;
    }
    public get disableApproveBySelf(): boolean | undefined {
        return this['disable_approve_by_self'];
    }
    public withDisableReviewBySelf(disableReviewBySelf: boolean): UpdateMergeRequestSettingDto {
        this['disable_review_by_self'] = disableReviewBySelf;
        return this;
    }
    public set disableReviewBySelf(disableReviewBySelf: boolean  | undefined) {
        this['disable_review_by_self'] = disableReviewBySelf;
    }
    public get disableReviewBySelf(): boolean | undefined {
        return this['disable_review_by_self'];
    }
    public withCanForceMerge(canForceMerge: boolean): UpdateMergeRequestSettingDto {
        this['can_force_merge'] = canForceMerge;
        return this;
    }
    public set canForceMerge(canForceMerge: boolean  | undefined) {
        this['can_force_merge'] = canForceMerge;
    }
    public get canForceMerge(): boolean | undefined {
        return this['can_force_merge'];
    }
    public withAddNotesAfterMerged(addNotesAfterMerged: boolean): UpdateMergeRequestSettingDto {
        this['add_notes_after_merged'] = addNotesAfterMerged;
        return this;
    }
    public set addNotesAfterMerged(addNotesAfterMerged: boolean  | undefined) {
        this['add_notes_after_merged'] = addNotesAfterMerged;
    }
    public get addNotesAfterMerged(): boolean | undefined {
        return this['add_notes_after_merged'];
    }
    public withMarkAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean): UpdateMergeRequestSettingDto {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
        return this;
    }
    public set markAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean  | undefined) {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
    }
    public get markAutoMergedMrAsClosed(): boolean | undefined {
        return this['mark_auto_merged_mr_as_closed'];
    }
    public withCanReopen(canReopen: boolean): UpdateMergeRequestSettingDto {
        this['can_reopen'] = canReopen;
        return this;
    }
    public set canReopen(canReopen: boolean  | undefined) {
        this['can_reopen'] = canReopen;
    }
    public get canReopen(): boolean | undefined {
        return this['can_reopen'];
    }
    public withDeleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean): UpdateMergeRequestSettingDto {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
        return this;
    }
    public set deleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean  | undefined) {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
    }
    public get deleteSourceBranchWhenMerged(): boolean | undefined {
        return this['delete_source_branch_when_merged'];
    }
    public withDisableSquashMerge(disableSquashMerge: boolean): UpdateMergeRequestSettingDto {
        this['disable_squash_merge'] = disableSquashMerge;
        return this;
    }
    public set disableSquashMerge(disableSquashMerge: boolean  | undefined) {
        this['disable_squash_merge'] = disableSquashMerge;
    }
    public get disableSquashMerge(): boolean | undefined {
        return this['disable_squash_merge'];
    }
    public withAutoSquashMerge(autoSquashMerge: boolean): UpdateMergeRequestSettingDto {
        this['auto_squash_merge'] = autoSquashMerge;
        return this;
    }
    public set autoSquashMerge(autoSquashMerge: boolean  | undefined) {
        this['auto_squash_merge'] = autoSquashMerge;
    }
    public get autoSquashMerge(): boolean | undefined {
        return this['auto_squash_merge'];
    }
    public withMergeMethod(mergeMethod: UpdateMergeRequestSettingDtoMergeMethodEnum | string): UpdateMergeRequestSettingDto {
        this['merge_method'] = mergeMethod;
        return this;
    }
    public set mergeMethod(mergeMethod: UpdateMergeRequestSettingDtoMergeMethodEnum | string  | undefined) {
        this['merge_method'] = mergeMethod;
    }
    public get mergeMethod(): UpdateMergeRequestSettingDtoMergeMethodEnum | string | undefined {
        return this['merge_method'];
    }
    public withSquashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean): UpdateMergeRequestSettingDto {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
        return this;
    }
    public set squashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean  | undefined) {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
    }
    public get squashMergeWithNoMergeCommit(): boolean | undefined {
        return this['squash_merge_with_no_merge_commit'];
    }
    public withMergedCommitAuthor(mergedCommitAuthor: UpdateMergeRequestSettingDtoMergedCommitAuthorEnum | string): UpdateMergeRequestSettingDto {
        this['merged_commit_author'] = mergedCommitAuthor;
        return this;
    }
    public set mergedCommitAuthor(mergedCommitAuthor: UpdateMergeRequestSettingDtoMergedCommitAuthorEnum | string  | undefined) {
        this['merged_commit_author'] = mergedCommitAuthor;
    }
    public get mergedCommitAuthor(): UpdateMergeRequestSettingDtoMergedCommitAuthorEnum | string | undefined {
        return this['merged_commit_author'];
    }
    public withEnableCustomEvaluation(enableCustomEvaluation: boolean): UpdateMergeRequestSettingDto {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
        return this;
    }
    public set enableCustomEvaluation(enableCustomEvaluation: boolean  | undefined) {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
    }
    public get enableCustomEvaluation(): boolean | undefined {
        return this['enable_custom_evaluation'];
    }
    public withEvaluationTypes(evaluationTypes: Array<string>): UpdateMergeRequestSettingDto {
        this['evaluation_types'] = evaluationTypes;
        return this;
    }
    public set evaluationTypes(evaluationTypes: Array<string>  | undefined) {
        this['evaluation_types'] = evaluationTypes;
    }
    public get evaluationTypes(): Array<string> | undefined {
        return this['evaluation_types'];
    }
    public withOnlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number): UpdateMergeRequestSettingDto {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
        return this;
    }
    public set onlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number  | undefined) {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
    }
    public get onlyAllowMergeIfVoteBiggerThan(): number | undefined {
        return this['only_allow_merge_if_vote_bigger_than'];
    }
    public withOnlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean): UpdateMergeRequestSettingDto {
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
export enum UpdateMergeRequestSettingDtoReviewModeEnum {
    APPROVAL = 'approval',
    VOTE = 'vote'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateMergeRequestSettingDtoEvaluationRoleEnum {
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_35 = 35,
    NUMBER_40 = 40
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateMergeRequestSettingDtoMergeMethodEnum {
    MERGE = 'merge',
    REBASE_MERGE = 'rebase_merge',
    FF = 'ff'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateMergeRequestSettingDtoMergedCommitAuthorEnum {
    MERGED_BY = 'merged_by',
    CREATED_BY = 'created_by'
}

import { EvaluationTypeDto } from './EvaluationTypeDto';
import { MergeRequestSettingResultDto } from './MergeRequestSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMergeRequestSettingResponse extends SdkResponse {
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
    private 'review_mode'?: ShowMergeRequestSettingResponseReviewModeEnum | string;
    private 'add_notes_after_merged'?: boolean;
    private 'merged_commit_author'?: ShowMergeRequestSettingResponseMergedCommitAuthorEnum | string;
    private 'evaluation_role'?: ShowMergeRequestSettingResponseEvaluationRoleEnum | number;
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
    private 'merge_method'?: ShowMergeRequestSettingResponseMergeMethodEnum | string;
    private 'only_allow_merge_if_vote_bigger_than'?: number;
    private 'only_assignee_can_merge'?: boolean;
    private 'repository_id'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowMergeRequestSettingResponse {
        this['id'] = id;
        return this;
    }
    public withDisableMergeBySelf(disableMergeBySelf: boolean): ShowMergeRequestSettingResponse {
        this['disable_merge_by_self'] = disableMergeBySelf;
        return this;
    }
    public set disableMergeBySelf(disableMergeBySelf: boolean  | undefined) {
        this['disable_merge_by_self'] = disableMergeBySelf;
    }
    public get disableMergeBySelf(): boolean | undefined {
        return this['disable_merge_by_self'];
    }
    public withDisableApproveBySelf(disableApproveBySelf: boolean): ShowMergeRequestSettingResponse {
        this['disable_approve_by_self'] = disableApproveBySelf;
        return this;
    }
    public set disableApproveBySelf(disableApproveBySelf: boolean  | undefined) {
        this['disable_approve_by_self'] = disableApproveBySelf;
    }
    public get disableApproveBySelf(): boolean | undefined {
        return this['disable_approve_by_self'];
    }
    public withDisableReviewBySelf(disableReviewBySelf: boolean): ShowMergeRequestSettingResponse {
        this['disable_review_by_self'] = disableReviewBySelf;
        return this;
    }
    public set disableReviewBySelf(disableReviewBySelf: boolean  | undefined) {
        this['disable_review_by_self'] = disableReviewBySelf;
    }
    public get disableReviewBySelf(): boolean | undefined {
        return this['disable_review_by_self'];
    }
    public withCreatedAt(createdAt: string): ShowMergeRequestSettingResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowMergeRequestSettingResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCanForceMerge(canForceMerge: boolean): ShowMergeRequestSettingResponse {
        this['can_force_merge'] = canForceMerge;
        return this;
    }
    public set canForceMerge(canForceMerge: boolean  | undefined) {
        this['can_force_merge'] = canForceMerge;
    }
    public get canForceMerge(): boolean | undefined {
        return this['can_force_merge'];
    }
    public withDisableSquashMerge(disableSquashMerge: boolean): ShowMergeRequestSettingResponse {
        this['disable_squash_merge'] = disableSquashMerge;
        return this;
    }
    public set disableSquashMerge(disableSquashMerge: boolean  | undefined) {
        this['disable_squash_merge'] = disableSquashMerge;
    }
    public get disableSquashMerge(): boolean | undefined {
        return this['disable_squash_merge'];
    }
    public withMustRelateIssue(mustRelateIssue: boolean): ShowMergeRequestSettingResponse {
        this['must_relate_issue'] = mustRelateIssue;
        return this;
    }
    public set mustRelateIssue(mustRelateIssue: boolean  | undefined) {
        this['must_relate_issue'] = mustRelateIssue;
    }
    public get mustRelateIssue(): boolean | undefined {
        return this['must_relate_issue'];
    }
    public withNeedRelateIssueBranches(needRelateIssueBranches: string): ShowMergeRequestSettingResponse {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
        return this;
    }
    public set needRelateIssueBranches(needRelateIssueBranches: string  | undefined) {
        this['need_relate_issue_branches'] = needRelateIssueBranches;
    }
    public get needRelateIssueBranches(): string | undefined {
        return this['need_relate_issue_branches'];
    }
    public withNeedAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean): ShowMergeRequestSettingResponse {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
        return this;
    }
    public set needAllIssuesCheckPassed(needAllIssuesCheckPassed: boolean  | undefined) {
        this['need_all_issues_check_passed'] = needAllIssuesCheckPassed;
    }
    public get needAllIssuesCheckPassed(): boolean | undefined {
        return this['need_all_issues_check_passed'];
    }
    public withReviewMode(reviewMode: ShowMergeRequestSettingResponseReviewModeEnum | string): ShowMergeRequestSettingResponse {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: ShowMergeRequestSettingResponseReviewModeEnum | string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): ShowMergeRequestSettingResponseReviewModeEnum | string | undefined {
        return this['review_mode'];
    }
    public withAddNotesAfterMerged(addNotesAfterMerged: boolean): ShowMergeRequestSettingResponse {
        this['add_notes_after_merged'] = addNotesAfterMerged;
        return this;
    }
    public set addNotesAfterMerged(addNotesAfterMerged: boolean  | undefined) {
        this['add_notes_after_merged'] = addNotesAfterMerged;
    }
    public get addNotesAfterMerged(): boolean | undefined {
        return this['add_notes_after_merged'];
    }
    public withMergedCommitAuthor(mergedCommitAuthor: ShowMergeRequestSettingResponseMergedCommitAuthorEnum | string): ShowMergeRequestSettingResponse {
        this['merged_commit_author'] = mergedCommitAuthor;
        return this;
    }
    public set mergedCommitAuthor(mergedCommitAuthor: ShowMergeRequestSettingResponseMergedCommitAuthorEnum | string  | undefined) {
        this['merged_commit_author'] = mergedCommitAuthor;
    }
    public get mergedCommitAuthor(): ShowMergeRequestSettingResponseMergedCommitAuthorEnum | string | undefined {
        return this['merged_commit_author'];
    }
    public withEvaluationRole(evaluationRole: ShowMergeRequestSettingResponseEvaluationRoleEnum | number): ShowMergeRequestSettingResponse {
        this['evaluation_role'] = evaluationRole;
        return this;
    }
    public set evaluationRole(evaluationRole: ShowMergeRequestSettingResponseEvaluationRoleEnum | number  | undefined) {
        this['evaluation_role'] = evaluationRole;
    }
    public get evaluationRole(): ShowMergeRequestSettingResponseEvaluationRoleEnum | number | undefined {
        return this['evaluation_role'];
    }
    public withEvaluationMergeGate(evaluationMergeGate: boolean): ShowMergeRequestSettingResponse {
        this['evaluation_merge_gate'] = evaluationMergeGate;
        return this;
    }
    public set evaluationMergeGate(evaluationMergeGate: boolean  | undefined) {
        this['evaluation_merge_gate'] = evaluationMergeGate;
    }
    public get evaluationMergeGate(): boolean | undefined {
        return this['evaluation_merge_gate'];
    }
    public withMarkAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean): ShowMergeRequestSettingResponse {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
        return this;
    }
    public set markAutoMergedMrAsClosed(markAutoMergedMrAsClosed: boolean  | undefined) {
        this['mark_auto_merged_mr_as_closed'] = markAutoMergedMrAsClosed;
    }
    public get markAutoMergedMrAsClosed(): boolean | undefined {
        return this['mark_auto_merged_mr_as_closed'];
    }
    public withDeleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean): ShowMergeRequestSettingResponse {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
        return this;
    }
    public set deleteSourceBranchWhenMerged(deleteSourceBranchWhenMerged: boolean  | undefined) {
        this['delete_source_branch_when_merged'] = deleteSourceBranchWhenMerged;
    }
    public get deleteSourceBranchWhenMerged(): boolean | undefined {
        return this['delete_source_branch_when_merged'];
    }
    public withAutoSquashMerge(autoSquashMerge: boolean): ShowMergeRequestSettingResponse {
        this['auto_squash_merge'] = autoSquashMerge;
        return this;
    }
    public set autoSquashMerge(autoSquashMerge: boolean  | undefined) {
        this['auto_squash_merge'] = autoSquashMerge;
    }
    public get autoSquashMerge(): boolean | undefined {
        return this['auto_squash_merge'];
    }
    public withSquashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean): ShowMergeRequestSettingResponse {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
        return this;
    }
    public set squashMergeWithNoMergeCommit(squashMergeWithNoMergeCommit: boolean  | undefined) {
        this['squash_merge_with_no_merge_commit'] = squashMergeWithNoMergeCommit;
    }
    public get squashMergeWithNoMergeCommit(): boolean | undefined {
        return this['squash_merge_with_no_merge_commit'];
    }
    public withOnlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean): ShowMergeRequestSettingResponse {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
        return this;
    }
    public set onlyAllowOneIssueCheckPassed(onlyAllowOneIssueCheckPassed: boolean  | undefined) {
        this['only_allow_one_issue_check_passed'] = onlyAllowOneIssueCheckPassed;
    }
    public get onlyAllowOneIssueCheckPassed(): boolean | undefined {
        return this['only_allow_one_issue_check_passed'];
    }
    public withEnableCustomEvaluation(enableCustomEvaluation: boolean): ShowMergeRequestSettingResponse {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
        return this;
    }
    public set enableCustomEvaluation(enableCustomEvaluation: boolean  | undefined) {
        this['enable_custom_evaluation'] = enableCustomEvaluation;
    }
    public get enableCustomEvaluation(): boolean | undefined {
        return this['enable_custom_evaluation'];
    }
    public withEvaluationTypes(evaluationTypes: Array<EvaluationTypeDto>): ShowMergeRequestSettingResponse {
        this['evaluation_types'] = evaluationTypes;
        return this;
    }
    public set evaluationTypes(evaluationTypes: Array<EvaluationTypeDto>  | undefined) {
        this['evaluation_types'] = evaluationTypes;
    }
    public get evaluationTypes(): Array<EvaluationTypeDto> | undefined {
        return this['evaluation_types'];
    }
    public withCanReopen(canReopen: boolean): ShowMergeRequestSettingResponse {
        this['can_reopen'] = canReopen;
        return this;
    }
    public set canReopen(canReopen: boolean  | undefined) {
        this['can_reopen'] = canReopen;
    }
    public get canReopen(): boolean | undefined {
        return this['can_reopen'];
    }
    public withOnlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean): ShowMergeRequestSettingResponse {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
        return this;
    }
    public set onlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean  | undefined) {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
    }
    public get onlyAllowMergeIfAllDiscussionsAreResolved(): boolean | undefined {
        return this['only_allow_merge_if_all_discussions_are_resolved'];
    }
    public withMergeMethod(mergeMethod: ShowMergeRequestSettingResponseMergeMethodEnum | string): ShowMergeRequestSettingResponse {
        this['merge_method'] = mergeMethod;
        return this;
    }
    public set mergeMethod(mergeMethod: ShowMergeRequestSettingResponseMergeMethodEnum | string  | undefined) {
        this['merge_method'] = mergeMethod;
    }
    public get mergeMethod(): ShowMergeRequestSettingResponseMergeMethodEnum | string | undefined {
        return this['merge_method'];
    }
    public withOnlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number): ShowMergeRequestSettingResponse {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
        return this;
    }
    public set onlyAllowMergeIfVoteBiggerThan(onlyAllowMergeIfVoteBiggerThan: number  | undefined) {
        this['only_allow_merge_if_vote_bigger_than'] = onlyAllowMergeIfVoteBiggerThan;
    }
    public get onlyAllowMergeIfVoteBiggerThan(): number | undefined {
        return this['only_allow_merge_if_vote_bigger_than'];
    }
    public withOnlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean): ShowMergeRequestSettingResponse {
        this['only_assignee_can_merge'] = onlyAssigneeCanMerge;
        return this;
    }
    public set onlyAssigneeCanMerge(onlyAssigneeCanMerge: boolean  | undefined) {
        this['only_assignee_can_merge'] = onlyAssigneeCanMerge;
    }
    public get onlyAssigneeCanMerge(): boolean | undefined {
        return this['only_assignee_can_merge'];
    }
    public withRepositoryId(repositoryId: number): ShowMergeRequestSettingResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMergeRequestSettingResponseReviewModeEnum {
    APPROVAL = 'approval',
    VOTE = 'vote'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMergeRequestSettingResponseMergedCommitAuthorEnum {
    MERGED_BY = 'merged_by',
    CREATED_BY = 'created_by'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMergeRequestSettingResponseEvaluationRoleEnum {
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_35 = 35,
    NUMBER_40 = 40
}
/**
    * @export
    * @enum {string}
    */
export enum ShowMergeRequestSettingResponseMergeMethodEnum {
    MERGE = 'merge',
    REBASE_MERGE = 'rebase_merge',
    FF = 'ff'
}

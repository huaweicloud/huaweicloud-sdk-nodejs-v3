
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMergeableStateOuterResponse extends SdkResponse {
    private 'merge_request_id'?: number;
    public state?: boolean;
    private 'conflict_passed'?: boolean;
    private 'non_ff_passed'?: boolean;
    private 'merged_by_user_passed'?: boolean;
    private 'work_in_progress_passed'?: boolean;
    private 'resolve_discussion_passed'?: boolean;
    private 'ci_state_passed'?: boolean;
    private 'merge_by_self_passed'?: boolean;
    private 'can_force_merge'?: boolean;
    private 'vote_passed'?: boolean;
    private 'e2e_check_passed'?: boolean;
    private 'all_issues_passed'?: boolean;
    private 'only_one_issue_passed'?: boolean;
    private 'approval_reviewers_required_passed'?: boolean;
    private 'approval_approvers_required_passed'?: boolean;
    private 'evaluation_passed'?: boolean;
    public constructor() { 
        super();
    }
    public withMergeRequestId(mergeRequestId: number): ShowMergeableStateOuterResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withState(state: boolean): ShowMergeableStateOuterResponse {
        this['state'] = state;
        return this;
    }
    public withConflictPassed(conflictPassed: boolean): ShowMergeableStateOuterResponse {
        this['conflict_passed'] = conflictPassed;
        return this;
    }
    public set conflictPassed(conflictPassed: boolean  | undefined) {
        this['conflict_passed'] = conflictPassed;
    }
    public get conflictPassed(): boolean | undefined {
        return this['conflict_passed'];
    }
    public withNonFfPassed(nonFfPassed: boolean): ShowMergeableStateOuterResponse {
        this['non_ff_passed'] = nonFfPassed;
        return this;
    }
    public set nonFfPassed(nonFfPassed: boolean  | undefined) {
        this['non_ff_passed'] = nonFfPassed;
    }
    public get nonFfPassed(): boolean | undefined {
        return this['non_ff_passed'];
    }
    public withMergedByUserPassed(mergedByUserPassed: boolean): ShowMergeableStateOuterResponse {
        this['merged_by_user_passed'] = mergedByUserPassed;
        return this;
    }
    public set mergedByUserPassed(mergedByUserPassed: boolean  | undefined) {
        this['merged_by_user_passed'] = mergedByUserPassed;
    }
    public get mergedByUserPassed(): boolean | undefined {
        return this['merged_by_user_passed'];
    }
    public withWorkInProgressPassed(workInProgressPassed: boolean): ShowMergeableStateOuterResponse {
        this['work_in_progress_passed'] = workInProgressPassed;
        return this;
    }
    public set workInProgressPassed(workInProgressPassed: boolean  | undefined) {
        this['work_in_progress_passed'] = workInProgressPassed;
    }
    public get workInProgressPassed(): boolean | undefined {
        return this['work_in_progress_passed'];
    }
    public withResolveDiscussionPassed(resolveDiscussionPassed: boolean): ShowMergeableStateOuterResponse {
        this['resolve_discussion_passed'] = resolveDiscussionPassed;
        return this;
    }
    public set resolveDiscussionPassed(resolveDiscussionPassed: boolean  | undefined) {
        this['resolve_discussion_passed'] = resolveDiscussionPassed;
    }
    public get resolveDiscussionPassed(): boolean | undefined {
        return this['resolve_discussion_passed'];
    }
    public withCiStatePassed(ciStatePassed: boolean): ShowMergeableStateOuterResponse {
        this['ci_state_passed'] = ciStatePassed;
        return this;
    }
    public set ciStatePassed(ciStatePassed: boolean  | undefined) {
        this['ci_state_passed'] = ciStatePassed;
    }
    public get ciStatePassed(): boolean | undefined {
        return this['ci_state_passed'];
    }
    public withMergeBySelfPassed(mergeBySelfPassed: boolean): ShowMergeableStateOuterResponse {
        this['merge_by_self_passed'] = mergeBySelfPassed;
        return this;
    }
    public set mergeBySelfPassed(mergeBySelfPassed: boolean  | undefined) {
        this['merge_by_self_passed'] = mergeBySelfPassed;
    }
    public get mergeBySelfPassed(): boolean | undefined {
        return this['merge_by_self_passed'];
    }
    public withCanForceMerge(canForceMerge: boolean): ShowMergeableStateOuterResponse {
        this['can_force_merge'] = canForceMerge;
        return this;
    }
    public set canForceMerge(canForceMerge: boolean  | undefined) {
        this['can_force_merge'] = canForceMerge;
    }
    public get canForceMerge(): boolean | undefined {
        return this['can_force_merge'];
    }
    public withVotePassed(votePassed: boolean): ShowMergeableStateOuterResponse {
        this['vote_passed'] = votePassed;
        return this;
    }
    public set votePassed(votePassed: boolean  | undefined) {
        this['vote_passed'] = votePassed;
    }
    public get votePassed(): boolean | undefined {
        return this['vote_passed'];
    }
    public withE2eCheckPassed(e2eCheckPassed: boolean): ShowMergeableStateOuterResponse {
        this['e2e_check_passed'] = e2eCheckPassed;
        return this;
    }
    public set e2eCheckPassed(e2eCheckPassed: boolean  | undefined) {
        this['e2e_check_passed'] = e2eCheckPassed;
    }
    public get e2eCheckPassed(): boolean | undefined {
        return this['e2e_check_passed'];
    }
    public withAllIssuesPassed(allIssuesPassed: boolean): ShowMergeableStateOuterResponse {
        this['all_issues_passed'] = allIssuesPassed;
        return this;
    }
    public set allIssuesPassed(allIssuesPassed: boolean  | undefined) {
        this['all_issues_passed'] = allIssuesPassed;
    }
    public get allIssuesPassed(): boolean | undefined {
        return this['all_issues_passed'];
    }
    public withOnlyOneIssuePassed(onlyOneIssuePassed: boolean): ShowMergeableStateOuterResponse {
        this['only_one_issue_passed'] = onlyOneIssuePassed;
        return this;
    }
    public set onlyOneIssuePassed(onlyOneIssuePassed: boolean  | undefined) {
        this['only_one_issue_passed'] = onlyOneIssuePassed;
    }
    public get onlyOneIssuePassed(): boolean | undefined {
        return this['only_one_issue_passed'];
    }
    public withApprovalReviewersRequiredPassed(approvalReviewersRequiredPassed: boolean): ShowMergeableStateOuterResponse {
        this['approval_reviewers_required_passed'] = approvalReviewersRequiredPassed;
        return this;
    }
    public set approvalReviewersRequiredPassed(approvalReviewersRequiredPassed: boolean  | undefined) {
        this['approval_reviewers_required_passed'] = approvalReviewersRequiredPassed;
    }
    public get approvalReviewersRequiredPassed(): boolean | undefined {
        return this['approval_reviewers_required_passed'];
    }
    public withApprovalApproversRequiredPassed(approvalApproversRequiredPassed: boolean): ShowMergeableStateOuterResponse {
        this['approval_approvers_required_passed'] = approvalApproversRequiredPassed;
        return this;
    }
    public set approvalApproversRequiredPassed(approvalApproversRequiredPassed: boolean  | undefined) {
        this['approval_approvers_required_passed'] = approvalApproversRequiredPassed;
    }
    public get approvalApproversRequiredPassed(): boolean | undefined {
        return this['approval_approvers_required_passed'];
    }
    public withEvaluationPassed(evaluationPassed: boolean): ShowMergeableStateOuterResponse {
        this['evaluation_passed'] = evaluationPassed;
        return this;
    }
    public set evaluationPassed(evaluationPassed: boolean  | undefined) {
        this['evaluation_passed'] = evaluationPassed;
    }
    public get evaluationPassed(): boolean | undefined {
        return this['evaluation_passed'];
    }
}
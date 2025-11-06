import { ApprovalUserDto } from './ApprovalUserDto';
import { MergeErrorDto } from './MergeErrorDto';
import { MergeRequestDiffExternalDto } from './MergeRequestDiffExternalDto';
import { MergeRequestExternalDto } from './MergeRequestExternalDto';
import { MergeRequestRelatedWorkItemDto } from './MergeRequestRelatedWorkItemDto';
import { MergeRequestReviewerExternalDto } from './MergeRequestReviewerExternalDto';
import { MilestoneBasicDto } from './MilestoneBasicDto';
import { ProjectSimpleDto } from './ProjectSimpleDto';
import { UserBasicExternalDto } from './UserBasicExternalDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportMergeRequestResponse extends SdkResponse {
    public id?: number;
    public iid?: number;
    private 'repository_id'?: number;
    public title?: string;
    public description?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    private 'is_source_branch_protected'?: boolean;
    private 'devcloud_source_branch'?: string;
    public author?: UserBasicExternalDto;
    private 'source_repository_id'?: number;
    private 'target_repository_id'?: number;
    private 'source_project_id'?: string;
    private 'target_project_id'?: string;
    public labels?: Array<object>;
    private 'work_in_progress'?: boolean;
    public milestone?: MilestoneBasicDto;
    private 'merge_when_build_succeeds'?: boolean;
    private 'merge_status'?: string;
    public sha?: string;
    private 'merge_commit_sha'?: string;
    public subscribed?: boolean;
    private 'merged_by'?: UserBasicExternalDto;
    private 'merged_at'?: string;
    private 'closed_by'?: UserBasicExternalDto;
    private 'closed_at'?: string;
    private 'user_notes_count'?: number;
    private 'force_remove_source_branch'?: boolean;
    private 'web_url'?: string;
    private 'merge_request_diff'?: MergeRequestDiffExternalDto;
    private 'merge_request_reviewers_count'?: number;
    private 'merge_request_review_count'?: number;
    private 'merge_request_reviewer_list'?: Array<MergeRequestReviewerExternalDto>;
    private 'merge_request_assignee_list'?: Array<UserBasicExternalDto>;
    public notes?: number;
    private 'codecheck_state'?: number;
    private 'codecheck_defect_count'?: number;
    private 'merge_request_related_work_items'?: Array<MergeRequestRelatedWorkItemDto>;
    private 'diverged_commits_count'?: number;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    private 'is_use_temp_branch'?: boolean;
    private 'review_mode'?: string;
    public squash?: boolean;
    private 'approval_merge_request_approvers'?: Array<ApprovalUserDto>;
    private 'approval_merge_request_reviewers'?: Array<ApprovalUserDto>;
    private 'source_repository'?: ProjectSimpleDto;
    private 'target_repository'?: ProjectSimpleDto;
    private 'is_source_branch_exist'?: boolean;
    private 'merge_request_type'?: string;
    private 'squash_commit_message'?: string;
    private 'auto_merge'?: boolean;
    private 'merge_error'?: string;
    private 'json_merge_error'?: MergeErrorDto;
    private 'rebase_in_progress'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: number): ImportMergeRequestResponse {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): ImportMergeRequestResponse {
        this['iid'] = iid;
        return this;
    }
    public withRepositoryId(repositoryId: number): ImportMergeRequestResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTitle(title: string): ImportMergeRequestResponse {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ImportMergeRequestResponse {
        this['description'] = description;
        return this;
    }
    public withState(state: string): ImportMergeRequestResponse {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): ImportMergeRequestResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ImportMergeRequestResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSourceBranch(sourceBranch: string): ImportMergeRequestResponse {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): ImportMergeRequestResponse {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withIsSourceBranchProtected(isSourceBranchProtected: boolean): ImportMergeRequestResponse {
        this['is_source_branch_protected'] = isSourceBranchProtected;
        return this;
    }
    public set isSourceBranchProtected(isSourceBranchProtected: boolean  | undefined) {
        this['is_source_branch_protected'] = isSourceBranchProtected;
    }
    public get isSourceBranchProtected(): boolean | undefined {
        return this['is_source_branch_protected'];
    }
    public withDevcloudSourceBranch(devcloudSourceBranch: string): ImportMergeRequestResponse {
        this['devcloud_source_branch'] = devcloudSourceBranch;
        return this;
    }
    public set devcloudSourceBranch(devcloudSourceBranch: string  | undefined) {
        this['devcloud_source_branch'] = devcloudSourceBranch;
    }
    public get devcloudSourceBranch(): string | undefined {
        return this['devcloud_source_branch'];
    }
    public withAuthor(author: UserBasicExternalDto): ImportMergeRequestResponse {
        this['author'] = author;
        return this;
    }
    public withSourceRepositoryId(sourceRepositoryId: number): ImportMergeRequestResponse {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): ImportMergeRequestResponse {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
    public withSourceProjectId(sourceProjectId: string): ImportMergeRequestResponse {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withTargetProjectId(targetProjectId: string): ImportMergeRequestResponse {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withLabels(labels: Array<object>): ImportMergeRequestResponse {
        this['labels'] = labels;
        return this;
    }
    public withWorkInProgress(workInProgress: boolean): ImportMergeRequestResponse {
        this['work_in_progress'] = workInProgress;
        return this;
    }
    public set workInProgress(workInProgress: boolean  | undefined) {
        this['work_in_progress'] = workInProgress;
    }
    public get workInProgress(): boolean | undefined {
        return this['work_in_progress'];
    }
    public withMilestone(milestone: MilestoneBasicDto): ImportMergeRequestResponse {
        this['milestone'] = milestone;
        return this;
    }
    public withMergeWhenBuildSucceeds(mergeWhenBuildSucceeds: boolean): ImportMergeRequestResponse {
        this['merge_when_build_succeeds'] = mergeWhenBuildSucceeds;
        return this;
    }
    public set mergeWhenBuildSucceeds(mergeWhenBuildSucceeds: boolean  | undefined) {
        this['merge_when_build_succeeds'] = mergeWhenBuildSucceeds;
    }
    public get mergeWhenBuildSucceeds(): boolean | undefined {
        return this['merge_when_build_succeeds'];
    }
    public withMergeStatus(mergeStatus: string): ImportMergeRequestResponse {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSha(sha: string): ImportMergeRequestResponse {
        this['sha'] = sha;
        return this;
    }
    public withMergeCommitSha(mergeCommitSha: string): ImportMergeRequestResponse {
        this['merge_commit_sha'] = mergeCommitSha;
        return this;
    }
    public set mergeCommitSha(mergeCommitSha: string  | undefined) {
        this['merge_commit_sha'] = mergeCommitSha;
    }
    public get mergeCommitSha(): string | undefined {
        return this['merge_commit_sha'];
    }
    public withSubscribed(subscribed: boolean): ImportMergeRequestResponse {
        this['subscribed'] = subscribed;
        return this;
    }
    public withMergedBy(mergedBy: UserBasicExternalDto): ImportMergeRequestResponse {
        this['merged_by'] = mergedBy;
        return this;
    }
    public set mergedBy(mergedBy: UserBasicExternalDto  | undefined) {
        this['merged_by'] = mergedBy;
    }
    public get mergedBy(): UserBasicExternalDto | undefined {
        return this['merged_by'];
    }
    public withMergedAt(mergedAt: string): ImportMergeRequestResponse {
        this['merged_at'] = mergedAt;
        return this;
    }
    public set mergedAt(mergedAt: string  | undefined) {
        this['merged_at'] = mergedAt;
    }
    public get mergedAt(): string | undefined {
        return this['merged_at'];
    }
    public withClosedBy(closedBy: UserBasicExternalDto): ImportMergeRequestResponse {
        this['closed_by'] = closedBy;
        return this;
    }
    public set closedBy(closedBy: UserBasicExternalDto  | undefined) {
        this['closed_by'] = closedBy;
    }
    public get closedBy(): UserBasicExternalDto | undefined {
        return this['closed_by'];
    }
    public withClosedAt(closedAt: string): ImportMergeRequestResponse {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withUserNotesCount(userNotesCount: number): ImportMergeRequestResponse {
        this['user_notes_count'] = userNotesCount;
        return this;
    }
    public set userNotesCount(userNotesCount: number  | undefined) {
        this['user_notes_count'] = userNotesCount;
    }
    public get userNotesCount(): number | undefined {
        return this['user_notes_count'];
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): ImportMergeRequestResponse {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withWebUrl(webUrl: string): ImportMergeRequestResponse {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withMergeRequestDiff(mergeRequestDiff: MergeRequestDiffExternalDto): ImportMergeRequestResponse {
        this['merge_request_diff'] = mergeRequestDiff;
        return this;
    }
    public set mergeRequestDiff(mergeRequestDiff: MergeRequestDiffExternalDto  | undefined) {
        this['merge_request_diff'] = mergeRequestDiff;
    }
    public get mergeRequestDiff(): MergeRequestDiffExternalDto | undefined {
        return this['merge_request_diff'];
    }
    public withMergeRequestReviewersCount(mergeRequestReviewersCount: number): ImportMergeRequestResponse {
        this['merge_request_reviewers_count'] = mergeRequestReviewersCount;
        return this;
    }
    public set mergeRequestReviewersCount(mergeRequestReviewersCount: number  | undefined) {
        this['merge_request_reviewers_count'] = mergeRequestReviewersCount;
    }
    public get mergeRequestReviewersCount(): number | undefined {
        return this['merge_request_reviewers_count'];
    }
    public withMergeRequestReviewCount(mergeRequestReviewCount: number): ImportMergeRequestResponse {
        this['merge_request_review_count'] = mergeRequestReviewCount;
        return this;
    }
    public set mergeRequestReviewCount(mergeRequestReviewCount: number  | undefined) {
        this['merge_request_review_count'] = mergeRequestReviewCount;
    }
    public get mergeRequestReviewCount(): number | undefined {
        return this['merge_request_review_count'];
    }
    public withMergeRequestReviewerList(mergeRequestReviewerList: Array<MergeRequestReviewerExternalDto>): ImportMergeRequestResponse {
        this['merge_request_reviewer_list'] = mergeRequestReviewerList;
        return this;
    }
    public set mergeRequestReviewerList(mergeRequestReviewerList: Array<MergeRequestReviewerExternalDto>  | undefined) {
        this['merge_request_reviewer_list'] = mergeRequestReviewerList;
    }
    public get mergeRequestReviewerList(): Array<MergeRequestReviewerExternalDto> | undefined {
        return this['merge_request_reviewer_list'];
    }
    public withMergeRequestAssigneeList(mergeRequestAssigneeList: Array<UserBasicExternalDto>): ImportMergeRequestResponse {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
        return this;
    }
    public set mergeRequestAssigneeList(mergeRequestAssigneeList: Array<UserBasicExternalDto>  | undefined) {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
    }
    public get mergeRequestAssigneeList(): Array<UserBasicExternalDto> | undefined {
        return this['merge_request_assignee_list'];
    }
    public withNotes(notes: number): ImportMergeRequestResponse {
        this['notes'] = notes;
        return this;
    }
    public withCodecheckState(codecheckState: number): ImportMergeRequestResponse {
        this['codecheck_state'] = codecheckState;
        return this;
    }
    public set codecheckState(codecheckState: number  | undefined) {
        this['codecheck_state'] = codecheckState;
    }
    public get codecheckState(): number | undefined {
        return this['codecheck_state'];
    }
    public withCodecheckDefectCount(codecheckDefectCount: number): ImportMergeRequestResponse {
        this['codecheck_defect_count'] = codecheckDefectCount;
        return this;
    }
    public set codecheckDefectCount(codecheckDefectCount: number  | undefined) {
        this['codecheck_defect_count'] = codecheckDefectCount;
    }
    public get codecheckDefectCount(): number | undefined {
        return this['codecheck_defect_count'];
    }
    public withMergeRequestRelatedWorkItems(mergeRequestRelatedWorkItems: Array<MergeRequestRelatedWorkItemDto>): ImportMergeRequestResponse {
        this['merge_request_related_work_items'] = mergeRequestRelatedWorkItems;
        return this;
    }
    public set mergeRequestRelatedWorkItems(mergeRequestRelatedWorkItems: Array<MergeRequestRelatedWorkItemDto>  | undefined) {
        this['merge_request_related_work_items'] = mergeRequestRelatedWorkItems;
    }
    public get mergeRequestRelatedWorkItems(): Array<MergeRequestRelatedWorkItemDto> | undefined {
        return this['merge_request_related_work_items'];
    }
    public withDivergedCommitsCount(divergedCommitsCount: number): ImportMergeRequestResponse {
        this['diverged_commits_count'] = divergedCommitsCount;
        return this;
    }
    public set divergedCommitsCount(divergedCommitsCount: number  | undefined) {
        this['diverged_commits_count'] = divergedCommitsCount;
    }
    public get divergedCommitsCount(): number | undefined {
        return this['diverged_commits_count'];
    }
    public withModerationResult(moderationResult: boolean): ImportMergeRequestResponse {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): ImportMergeRequestResponse {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): ImportMergeRequestResponse {
        this['moderation_status'] = moderationStatus;
        return this;
    }
    public set moderationStatus(moderationStatus: number  | undefined) {
        this['moderation_status'] = moderationStatus;
    }
    public get moderationStatus(): number | undefined {
        return this['moderation_status'];
    }
    public withIsUseTempBranch(isUseTempBranch: boolean): ImportMergeRequestResponse {
        this['is_use_temp_branch'] = isUseTempBranch;
        return this;
    }
    public set isUseTempBranch(isUseTempBranch: boolean  | undefined) {
        this['is_use_temp_branch'] = isUseTempBranch;
    }
    public get isUseTempBranch(): boolean | undefined {
        return this['is_use_temp_branch'];
    }
    public withReviewMode(reviewMode: string): ImportMergeRequestResponse {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): string | undefined {
        return this['review_mode'];
    }
    public withSquash(squash: boolean): ImportMergeRequestResponse {
        this['squash'] = squash;
        return this;
    }
    public withApprovalMergeRequestApprovers(approvalMergeRequestApprovers: Array<ApprovalUserDto>): ImportMergeRequestResponse {
        this['approval_merge_request_approvers'] = approvalMergeRequestApprovers;
        return this;
    }
    public set approvalMergeRequestApprovers(approvalMergeRequestApprovers: Array<ApprovalUserDto>  | undefined) {
        this['approval_merge_request_approvers'] = approvalMergeRequestApprovers;
    }
    public get approvalMergeRequestApprovers(): Array<ApprovalUserDto> | undefined {
        return this['approval_merge_request_approvers'];
    }
    public withApprovalMergeRequestReviewers(approvalMergeRequestReviewers: Array<ApprovalUserDto>): ImportMergeRequestResponse {
        this['approval_merge_request_reviewers'] = approvalMergeRequestReviewers;
        return this;
    }
    public set approvalMergeRequestReviewers(approvalMergeRequestReviewers: Array<ApprovalUserDto>  | undefined) {
        this['approval_merge_request_reviewers'] = approvalMergeRequestReviewers;
    }
    public get approvalMergeRequestReviewers(): Array<ApprovalUserDto> | undefined {
        return this['approval_merge_request_reviewers'];
    }
    public withSourceRepository(sourceRepository: ProjectSimpleDto): ImportMergeRequestResponse {
        this['source_repository'] = sourceRepository;
        return this;
    }
    public set sourceRepository(sourceRepository: ProjectSimpleDto  | undefined) {
        this['source_repository'] = sourceRepository;
    }
    public get sourceRepository(): ProjectSimpleDto | undefined {
        return this['source_repository'];
    }
    public withTargetRepository(targetRepository: ProjectSimpleDto): ImportMergeRequestResponse {
        this['target_repository'] = targetRepository;
        return this;
    }
    public set targetRepository(targetRepository: ProjectSimpleDto  | undefined) {
        this['target_repository'] = targetRepository;
    }
    public get targetRepository(): ProjectSimpleDto | undefined {
        return this['target_repository'];
    }
    public withIsSourceBranchExist(isSourceBranchExist: boolean): ImportMergeRequestResponse {
        this['is_source_branch_exist'] = isSourceBranchExist;
        return this;
    }
    public set isSourceBranchExist(isSourceBranchExist: boolean  | undefined) {
        this['is_source_branch_exist'] = isSourceBranchExist;
    }
    public get isSourceBranchExist(): boolean | undefined {
        return this['is_source_branch_exist'];
    }
    public withMergeRequestType(mergeRequestType: string): ImportMergeRequestResponse {
        this['merge_request_type'] = mergeRequestType;
        return this;
    }
    public set mergeRequestType(mergeRequestType: string  | undefined) {
        this['merge_request_type'] = mergeRequestType;
    }
    public get mergeRequestType(): string | undefined {
        return this['merge_request_type'];
    }
    public withSquashCommitMessage(squashCommitMessage: string): ImportMergeRequestResponse {
        this['squash_commit_message'] = squashCommitMessage;
        return this;
    }
    public set squashCommitMessage(squashCommitMessage: string  | undefined) {
        this['squash_commit_message'] = squashCommitMessage;
    }
    public get squashCommitMessage(): string | undefined {
        return this['squash_commit_message'];
    }
    public withAutoMerge(autoMerge: boolean): ImportMergeRequestResponse {
        this['auto_merge'] = autoMerge;
        return this;
    }
    public set autoMerge(autoMerge: boolean  | undefined) {
        this['auto_merge'] = autoMerge;
    }
    public get autoMerge(): boolean | undefined {
        return this['auto_merge'];
    }
    public withMergeError(mergeError: string): ImportMergeRequestResponse {
        this['merge_error'] = mergeError;
        return this;
    }
    public set mergeError(mergeError: string  | undefined) {
        this['merge_error'] = mergeError;
    }
    public get mergeError(): string | undefined {
        return this['merge_error'];
    }
    public withJsonMergeError(jsonMergeError: MergeErrorDto): ImportMergeRequestResponse {
        this['json_merge_error'] = jsonMergeError;
        return this;
    }
    public set jsonMergeError(jsonMergeError: MergeErrorDto  | undefined) {
        this['json_merge_error'] = jsonMergeError;
    }
    public get jsonMergeError(): MergeErrorDto | undefined {
        return this['json_merge_error'];
    }
    public withRebaseInProgress(rebaseInProgress: boolean): ImportMergeRequestResponse {
        this['rebase_in_progress'] = rebaseInProgress;
        return this;
    }
    public set rebaseInProgress(rebaseInProgress: boolean  | undefined) {
        this['rebase_in_progress'] = rebaseInProgress;
    }
    public get rebaseInProgress(): boolean | undefined {
        return this['rebase_in_progress'];
    }
}
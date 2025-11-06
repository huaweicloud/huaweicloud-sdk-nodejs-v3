import { MergeRequestDiffExternalDto } from './MergeRequestDiffExternalDto';
import { MergeRequestRelatedWorkItemDto } from './MergeRequestRelatedWorkItemDto';
import { MergeRequestReviewerExternalDto } from './MergeRequestReviewerExternalDto';
import { MilestoneBasicDto } from './MilestoneBasicDto';
import { UserBasicExternalDto } from './UserBasicExternalDto';


export class MergeRequestExternalDto {
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
    public constructor() { 
    }
    public withId(id: number): MergeRequestExternalDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MergeRequestExternalDto {
        this['iid'] = iid;
        return this;
    }
    public withRepositoryId(repositoryId: number): MergeRequestExternalDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTitle(title: string): MergeRequestExternalDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): MergeRequestExternalDto {
        this['description'] = description;
        return this;
    }
    public withState(state: string): MergeRequestExternalDto {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): MergeRequestExternalDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestExternalDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSourceBranch(sourceBranch: string): MergeRequestExternalDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): MergeRequestExternalDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withIsSourceBranchProtected(isSourceBranchProtected: boolean): MergeRequestExternalDto {
        this['is_source_branch_protected'] = isSourceBranchProtected;
        return this;
    }
    public set isSourceBranchProtected(isSourceBranchProtected: boolean  | undefined) {
        this['is_source_branch_protected'] = isSourceBranchProtected;
    }
    public get isSourceBranchProtected(): boolean | undefined {
        return this['is_source_branch_protected'];
    }
    public withDevcloudSourceBranch(devcloudSourceBranch: string): MergeRequestExternalDto {
        this['devcloud_source_branch'] = devcloudSourceBranch;
        return this;
    }
    public set devcloudSourceBranch(devcloudSourceBranch: string  | undefined) {
        this['devcloud_source_branch'] = devcloudSourceBranch;
    }
    public get devcloudSourceBranch(): string | undefined {
        return this['devcloud_source_branch'];
    }
    public withAuthor(author: UserBasicExternalDto): MergeRequestExternalDto {
        this['author'] = author;
        return this;
    }
    public withSourceRepositoryId(sourceRepositoryId: number): MergeRequestExternalDto {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): MergeRequestExternalDto {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
    public withSourceProjectId(sourceProjectId: string): MergeRequestExternalDto {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withTargetProjectId(targetProjectId: string): MergeRequestExternalDto {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withLabels(labels: Array<object>): MergeRequestExternalDto {
        this['labels'] = labels;
        return this;
    }
    public withWorkInProgress(workInProgress: boolean): MergeRequestExternalDto {
        this['work_in_progress'] = workInProgress;
        return this;
    }
    public set workInProgress(workInProgress: boolean  | undefined) {
        this['work_in_progress'] = workInProgress;
    }
    public get workInProgress(): boolean | undefined {
        return this['work_in_progress'];
    }
    public withMilestone(milestone: MilestoneBasicDto): MergeRequestExternalDto {
        this['milestone'] = milestone;
        return this;
    }
    public withMergeWhenBuildSucceeds(mergeWhenBuildSucceeds: boolean): MergeRequestExternalDto {
        this['merge_when_build_succeeds'] = mergeWhenBuildSucceeds;
        return this;
    }
    public set mergeWhenBuildSucceeds(mergeWhenBuildSucceeds: boolean  | undefined) {
        this['merge_when_build_succeeds'] = mergeWhenBuildSucceeds;
    }
    public get mergeWhenBuildSucceeds(): boolean | undefined {
        return this['merge_when_build_succeeds'];
    }
    public withMergeStatus(mergeStatus: string): MergeRequestExternalDto {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSha(sha: string): MergeRequestExternalDto {
        this['sha'] = sha;
        return this;
    }
    public withMergeCommitSha(mergeCommitSha: string): MergeRequestExternalDto {
        this['merge_commit_sha'] = mergeCommitSha;
        return this;
    }
    public set mergeCommitSha(mergeCommitSha: string  | undefined) {
        this['merge_commit_sha'] = mergeCommitSha;
    }
    public get mergeCommitSha(): string | undefined {
        return this['merge_commit_sha'];
    }
    public withSubscribed(subscribed: boolean): MergeRequestExternalDto {
        this['subscribed'] = subscribed;
        return this;
    }
    public withMergedBy(mergedBy: UserBasicExternalDto): MergeRequestExternalDto {
        this['merged_by'] = mergedBy;
        return this;
    }
    public set mergedBy(mergedBy: UserBasicExternalDto  | undefined) {
        this['merged_by'] = mergedBy;
    }
    public get mergedBy(): UserBasicExternalDto | undefined {
        return this['merged_by'];
    }
    public withMergedAt(mergedAt: string): MergeRequestExternalDto {
        this['merged_at'] = mergedAt;
        return this;
    }
    public set mergedAt(mergedAt: string  | undefined) {
        this['merged_at'] = mergedAt;
    }
    public get mergedAt(): string | undefined {
        return this['merged_at'];
    }
    public withClosedBy(closedBy: UserBasicExternalDto): MergeRequestExternalDto {
        this['closed_by'] = closedBy;
        return this;
    }
    public set closedBy(closedBy: UserBasicExternalDto  | undefined) {
        this['closed_by'] = closedBy;
    }
    public get closedBy(): UserBasicExternalDto | undefined {
        return this['closed_by'];
    }
    public withClosedAt(closedAt: string): MergeRequestExternalDto {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withUserNotesCount(userNotesCount: number): MergeRequestExternalDto {
        this['user_notes_count'] = userNotesCount;
        return this;
    }
    public set userNotesCount(userNotesCount: number  | undefined) {
        this['user_notes_count'] = userNotesCount;
    }
    public get userNotesCount(): number | undefined {
        return this['user_notes_count'];
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): MergeRequestExternalDto {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withWebUrl(webUrl: string): MergeRequestExternalDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withMergeRequestDiff(mergeRequestDiff: MergeRequestDiffExternalDto): MergeRequestExternalDto {
        this['merge_request_diff'] = mergeRequestDiff;
        return this;
    }
    public set mergeRequestDiff(mergeRequestDiff: MergeRequestDiffExternalDto  | undefined) {
        this['merge_request_diff'] = mergeRequestDiff;
    }
    public get mergeRequestDiff(): MergeRequestDiffExternalDto | undefined {
        return this['merge_request_diff'];
    }
    public withMergeRequestReviewersCount(mergeRequestReviewersCount: number): MergeRequestExternalDto {
        this['merge_request_reviewers_count'] = mergeRequestReviewersCount;
        return this;
    }
    public set mergeRequestReviewersCount(mergeRequestReviewersCount: number  | undefined) {
        this['merge_request_reviewers_count'] = mergeRequestReviewersCount;
    }
    public get mergeRequestReviewersCount(): number | undefined {
        return this['merge_request_reviewers_count'];
    }
    public withMergeRequestReviewCount(mergeRequestReviewCount: number): MergeRequestExternalDto {
        this['merge_request_review_count'] = mergeRequestReviewCount;
        return this;
    }
    public set mergeRequestReviewCount(mergeRequestReviewCount: number  | undefined) {
        this['merge_request_review_count'] = mergeRequestReviewCount;
    }
    public get mergeRequestReviewCount(): number | undefined {
        return this['merge_request_review_count'];
    }
    public withMergeRequestReviewerList(mergeRequestReviewerList: Array<MergeRequestReviewerExternalDto>): MergeRequestExternalDto {
        this['merge_request_reviewer_list'] = mergeRequestReviewerList;
        return this;
    }
    public set mergeRequestReviewerList(mergeRequestReviewerList: Array<MergeRequestReviewerExternalDto>  | undefined) {
        this['merge_request_reviewer_list'] = mergeRequestReviewerList;
    }
    public get mergeRequestReviewerList(): Array<MergeRequestReviewerExternalDto> | undefined {
        return this['merge_request_reviewer_list'];
    }
    public withMergeRequestAssigneeList(mergeRequestAssigneeList: Array<UserBasicExternalDto>): MergeRequestExternalDto {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
        return this;
    }
    public set mergeRequestAssigneeList(mergeRequestAssigneeList: Array<UserBasicExternalDto>  | undefined) {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
    }
    public get mergeRequestAssigneeList(): Array<UserBasicExternalDto> | undefined {
        return this['merge_request_assignee_list'];
    }
    public withNotes(notes: number): MergeRequestExternalDto {
        this['notes'] = notes;
        return this;
    }
    public withCodecheckState(codecheckState: number): MergeRequestExternalDto {
        this['codecheck_state'] = codecheckState;
        return this;
    }
    public set codecheckState(codecheckState: number  | undefined) {
        this['codecheck_state'] = codecheckState;
    }
    public get codecheckState(): number | undefined {
        return this['codecheck_state'];
    }
    public withCodecheckDefectCount(codecheckDefectCount: number): MergeRequestExternalDto {
        this['codecheck_defect_count'] = codecheckDefectCount;
        return this;
    }
    public set codecheckDefectCount(codecheckDefectCount: number  | undefined) {
        this['codecheck_defect_count'] = codecheckDefectCount;
    }
    public get codecheckDefectCount(): number | undefined {
        return this['codecheck_defect_count'];
    }
    public withMergeRequestRelatedWorkItems(mergeRequestRelatedWorkItems: Array<MergeRequestRelatedWorkItemDto>): MergeRequestExternalDto {
        this['merge_request_related_work_items'] = mergeRequestRelatedWorkItems;
        return this;
    }
    public set mergeRequestRelatedWorkItems(mergeRequestRelatedWorkItems: Array<MergeRequestRelatedWorkItemDto>  | undefined) {
        this['merge_request_related_work_items'] = mergeRequestRelatedWorkItems;
    }
    public get mergeRequestRelatedWorkItems(): Array<MergeRequestRelatedWorkItemDto> | undefined {
        return this['merge_request_related_work_items'];
    }
    public withDivergedCommitsCount(divergedCommitsCount: number): MergeRequestExternalDto {
        this['diverged_commits_count'] = divergedCommitsCount;
        return this;
    }
    public set divergedCommitsCount(divergedCommitsCount: number  | undefined) {
        this['diverged_commits_count'] = divergedCommitsCount;
    }
    public get divergedCommitsCount(): number | undefined {
        return this['diverged_commits_count'];
    }
    public withModerationResult(moderationResult: boolean): MergeRequestExternalDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): MergeRequestExternalDto {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): MergeRequestExternalDto {
        this['moderation_status'] = moderationStatus;
        return this;
    }
    public set moderationStatus(moderationStatus: number  | undefined) {
        this['moderation_status'] = moderationStatus;
    }
    public get moderationStatus(): number | undefined {
        return this['moderation_status'];
    }
    public withIsUseTempBranch(isUseTempBranch: boolean): MergeRequestExternalDto {
        this['is_use_temp_branch'] = isUseTempBranch;
        return this;
    }
    public set isUseTempBranch(isUseTempBranch: boolean  | undefined) {
        this['is_use_temp_branch'] = isUseTempBranch;
    }
    public get isUseTempBranch(): boolean | undefined {
        return this['is_use_temp_branch'];
    }
}
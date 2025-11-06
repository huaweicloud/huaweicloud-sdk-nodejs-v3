import { IssuableTimeStatsDto } from './IssuableTimeStatsDto';
import { MilestoneBasicDto } from './MilestoneBasicDto';
import { UserBasicDto } from './UserBasicDto';


export class CommitMergeRequestDto {
    public id?: number;
    public iid?: number;
    public title?: string;
    public description?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'merged_by'?: UserBasicDto;
    private 'merged_at'?: string;
    private 'closed_by'?: UserBasicDto;
    private 'closed_at'?: string;
    private 'target_branch'?: string;
    private 'source_branch'?: string;
    private 'user_notes_count'?: number;
    public upvotes?: number;
    public downvotes?: number;
    public author?: UserBasicDto;
    public assignee?: Array<UserBasicDto>;
    private 'source_repository_id'?: number;
    private 'target_repository_id'?: number;
    public labels?: Array<string>;
    private 'work_in_progress'?: boolean;
    public milestone?: MilestoneBasicDto;
    private 'merge_when_pipeline_succeeds'?: boolean;
    private 'merge_status'?: string;
    public sha?: string;
    private 'merge_commit_sha'?: string;
    private 'discussion_locked'?: boolean;
    private 'force_remove_source_branch'?: boolean;
    private 'should_remove_source_branch'?: boolean;
    private 'allow_collaboration'?: boolean;
    private 'allow_maintainer_to_push'?: boolean;
    private 'web_url'?: string;
    private 'time_stats'?: IssuableTimeStatsDto;
    public squash?: boolean;
    private 'merge_request_type'?: string;
    public constructor() { 
    }
    public withId(id: number): CommitMergeRequestDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): CommitMergeRequestDto {
        this['iid'] = iid;
        return this;
    }
    public withTitle(title: string): CommitMergeRequestDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CommitMergeRequestDto {
        this['description'] = description;
        return this;
    }
    public withState(state: string): CommitMergeRequestDto {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): CommitMergeRequestDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CommitMergeRequestDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withMergedBy(mergedBy: UserBasicDto): CommitMergeRequestDto {
        this['merged_by'] = mergedBy;
        return this;
    }
    public set mergedBy(mergedBy: UserBasicDto  | undefined) {
        this['merged_by'] = mergedBy;
    }
    public get mergedBy(): UserBasicDto | undefined {
        return this['merged_by'];
    }
    public withMergedAt(mergedAt: string): CommitMergeRequestDto {
        this['merged_at'] = mergedAt;
        return this;
    }
    public set mergedAt(mergedAt: string  | undefined) {
        this['merged_at'] = mergedAt;
    }
    public get mergedAt(): string | undefined {
        return this['merged_at'];
    }
    public withClosedBy(closedBy: UserBasicDto): CommitMergeRequestDto {
        this['closed_by'] = closedBy;
        return this;
    }
    public set closedBy(closedBy: UserBasicDto  | undefined) {
        this['closed_by'] = closedBy;
    }
    public get closedBy(): UserBasicDto | undefined {
        return this['closed_by'];
    }
    public withClosedAt(closedAt: string): CommitMergeRequestDto {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withTargetBranch(targetBranch: string): CommitMergeRequestDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSourceBranch(sourceBranch: string): CommitMergeRequestDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withUserNotesCount(userNotesCount: number): CommitMergeRequestDto {
        this['user_notes_count'] = userNotesCount;
        return this;
    }
    public set userNotesCount(userNotesCount: number  | undefined) {
        this['user_notes_count'] = userNotesCount;
    }
    public get userNotesCount(): number | undefined {
        return this['user_notes_count'];
    }
    public withUpvotes(upvotes: number): CommitMergeRequestDto {
        this['upvotes'] = upvotes;
        return this;
    }
    public withDownvotes(downvotes: number): CommitMergeRequestDto {
        this['downvotes'] = downvotes;
        return this;
    }
    public withAuthor(author: UserBasicDto): CommitMergeRequestDto {
        this['author'] = author;
        return this;
    }
    public withAssignee(assignee: Array<UserBasicDto>): CommitMergeRequestDto {
        this['assignee'] = assignee;
        return this;
    }
    public withSourceRepositoryId(sourceRepositoryId: number): CommitMergeRequestDto {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withTargetRepositoryId(targetRepositoryId: number): CommitMergeRequestDto {
        this['target_repository_id'] = targetRepositoryId;
        return this;
    }
    public set targetRepositoryId(targetRepositoryId: number  | undefined) {
        this['target_repository_id'] = targetRepositoryId;
    }
    public get targetRepositoryId(): number | undefined {
        return this['target_repository_id'];
    }
    public withLabels(labels: Array<string>): CommitMergeRequestDto {
        this['labels'] = labels;
        return this;
    }
    public withWorkInProgress(workInProgress: boolean): CommitMergeRequestDto {
        this['work_in_progress'] = workInProgress;
        return this;
    }
    public set workInProgress(workInProgress: boolean  | undefined) {
        this['work_in_progress'] = workInProgress;
    }
    public get workInProgress(): boolean | undefined {
        return this['work_in_progress'];
    }
    public withMilestone(milestone: MilestoneBasicDto): CommitMergeRequestDto {
        this['milestone'] = milestone;
        return this;
    }
    public withMergeWhenPipelineSucceeds(mergeWhenPipelineSucceeds: boolean): CommitMergeRequestDto {
        this['merge_when_pipeline_succeeds'] = mergeWhenPipelineSucceeds;
        return this;
    }
    public set mergeWhenPipelineSucceeds(mergeWhenPipelineSucceeds: boolean  | undefined) {
        this['merge_when_pipeline_succeeds'] = mergeWhenPipelineSucceeds;
    }
    public get mergeWhenPipelineSucceeds(): boolean | undefined {
        return this['merge_when_pipeline_succeeds'];
    }
    public withMergeStatus(mergeStatus: string): CommitMergeRequestDto {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSha(sha: string): CommitMergeRequestDto {
        this['sha'] = sha;
        return this;
    }
    public withMergeCommitSha(mergeCommitSha: string): CommitMergeRequestDto {
        this['merge_commit_sha'] = mergeCommitSha;
        return this;
    }
    public set mergeCommitSha(mergeCommitSha: string  | undefined) {
        this['merge_commit_sha'] = mergeCommitSha;
    }
    public get mergeCommitSha(): string | undefined {
        return this['merge_commit_sha'];
    }
    public withDiscussionLocked(discussionLocked: boolean): CommitMergeRequestDto {
        this['discussion_locked'] = discussionLocked;
        return this;
    }
    public set discussionLocked(discussionLocked: boolean  | undefined) {
        this['discussion_locked'] = discussionLocked;
    }
    public get discussionLocked(): boolean | undefined {
        return this['discussion_locked'];
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): CommitMergeRequestDto {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withShouldRemoveSourceBranch(shouldRemoveSourceBranch: boolean): CommitMergeRequestDto {
        this['should_remove_source_branch'] = shouldRemoveSourceBranch;
        return this;
    }
    public set shouldRemoveSourceBranch(shouldRemoveSourceBranch: boolean  | undefined) {
        this['should_remove_source_branch'] = shouldRemoveSourceBranch;
    }
    public get shouldRemoveSourceBranch(): boolean | undefined {
        return this['should_remove_source_branch'];
    }
    public withAllowCollaboration(allowCollaboration: boolean): CommitMergeRequestDto {
        this['allow_collaboration'] = allowCollaboration;
        return this;
    }
    public set allowCollaboration(allowCollaboration: boolean  | undefined) {
        this['allow_collaboration'] = allowCollaboration;
    }
    public get allowCollaboration(): boolean | undefined {
        return this['allow_collaboration'];
    }
    public withAllowMaintainerToPush(allowMaintainerToPush: boolean): CommitMergeRequestDto {
        this['allow_maintainer_to_push'] = allowMaintainerToPush;
        return this;
    }
    public set allowMaintainerToPush(allowMaintainerToPush: boolean  | undefined) {
        this['allow_maintainer_to_push'] = allowMaintainerToPush;
    }
    public get allowMaintainerToPush(): boolean | undefined {
        return this['allow_maintainer_to_push'];
    }
    public withWebUrl(webUrl: string): CommitMergeRequestDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withTimeStats(timeStats: IssuableTimeStatsDto): CommitMergeRequestDto {
        this['time_stats'] = timeStats;
        return this;
    }
    public set timeStats(timeStats: IssuableTimeStatsDto  | undefined) {
        this['time_stats'] = timeStats;
    }
    public get timeStats(): IssuableTimeStatsDto | undefined {
        return this['time_stats'];
    }
    public withSquash(squash: boolean): CommitMergeRequestDto {
        this['squash'] = squash;
        return this;
    }
    public withMergeRequestType(mergeRequestType: string): CommitMergeRequestDto {
        this['merge_request_type'] = mergeRequestType;
        return this;
    }
    public set mergeRequestType(mergeRequestType: string  | undefined) {
        this['merge_request_type'] = mergeRequestType;
    }
    public get mergeRequestType(): string | undefined {
        return this['merge_request_type'];
    }
}
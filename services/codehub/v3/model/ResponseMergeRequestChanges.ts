import { Author } from './Author';
import { DiffRefsDto } from './DiffRefsDto';
import { MergeRequestDiffFileDto } from './MergeRequestDiffFileDto';
import { MergeRequestListDtoUser } from './MergeRequestListDtoUser';
import { PipelineBasicDto } from './PipelineBasicDto';
import { ProjectSimpleDto } from './ProjectSimpleDto';


export class ResponseMergeRequestChanges {
    public id?: number;
    public iid?: number;
    private 'project_id'?: number;
    public title?: string;
    public description?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'target_branch'?: string;
    private 'source_branch'?: string;
    private 'user_notes_count'?: number;
    public upvotes?: number;
    public downvotes?: number;
    public author?: Author;
    private 'source_project_id'?: number;
    private 'target_project_id'?: number;
    public labels?: Array<string>;
    private 'work_in_progress'?: boolean;
    private 'merge_when_pipeline_succeeds'?: boolean;
    private 'merge_status'?: string;
    public sha?: string;
    private 'should_remove_source_branch'?: boolean;
    private 'force_remove_source_branch'?: boolean;
    private 'web_url'?: string;
    public squash?: boolean;
    private 'merge_request_type'?: string;
    public subscribed?: boolean;
    private 'changes_count'?: string;
    private 'latest_build_started_at'?: string;
    private 'latest_build_finished_at'?: string;
    private 'first_deployed_to_production_at'?: string;
    public pipeline?: PipelineBasicDto;
    private 'diff_refs'?: DiffRefsDto;
    private 'merge_error'?: string;
    private 'rebase_in_progress'?: boolean;
    private 'diverged_commits_count'?: number;
    public user?: MergeRequestListDtoUser;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    public changes?: Array<MergeRequestDiffFileDto>;
    private 'source_project'?: ProjectSimpleDto;
    public constructor() { 
    }
    public withId(id: number): ResponseMergeRequestChanges {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): ResponseMergeRequestChanges {
        this['iid'] = iid;
        return this;
    }
    public withProjectId(projectId: number): ResponseMergeRequestChanges {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withTitle(title: string): ResponseMergeRequestChanges {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ResponseMergeRequestChanges {
        this['description'] = description;
        return this;
    }
    public withState(state: string): ResponseMergeRequestChanges {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): ResponseMergeRequestChanges {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ResponseMergeRequestChanges {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withTargetBranch(targetBranch: string): ResponseMergeRequestChanges {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSourceBranch(sourceBranch: string): ResponseMergeRequestChanges {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withUserNotesCount(userNotesCount: number): ResponseMergeRequestChanges {
        this['user_notes_count'] = userNotesCount;
        return this;
    }
    public set userNotesCount(userNotesCount: number  | undefined) {
        this['user_notes_count'] = userNotesCount;
    }
    public get userNotesCount(): number | undefined {
        return this['user_notes_count'];
    }
    public withUpvotes(upvotes: number): ResponseMergeRequestChanges {
        this['upvotes'] = upvotes;
        return this;
    }
    public withDownvotes(downvotes: number): ResponseMergeRequestChanges {
        this['downvotes'] = downvotes;
        return this;
    }
    public withAuthor(author: Author): ResponseMergeRequestChanges {
        this['author'] = author;
        return this;
    }
    public withSourceProjectId(sourceProjectId: number): ResponseMergeRequestChanges {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: number  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): number | undefined {
        return this['source_project_id'];
    }
    public withTargetProjectId(targetProjectId: number): ResponseMergeRequestChanges {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: number  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): number | undefined {
        return this['target_project_id'];
    }
    public withLabels(labels: Array<string>): ResponseMergeRequestChanges {
        this['labels'] = labels;
        return this;
    }
    public withWorkInProgress(workInProgress: boolean): ResponseMergeRequestChanges {
        this['work_in_progress'] = workInProgress;
        return this;
    }
    public set workInProgress(workInProgress: boolean  | undefined) {
        this['work_in_progress'] = workInProgress;
    }
    public get workInProgress(): boolean | undefined {
        return this['work_in_progress'];
    }
    public withMergeWhenPipelineSucceeds(mergeWhenPipelineSucceeds: boolean): ResponseMergeRequestChanges {
        this['merge_when_pipeline_succeeds'] = mergeWhenPipelineSucceeds;
        return this;
    }
    public set mergeWhenPipelineSucceeds(mergeWhenPipelineSucceeds: boolean  | undefined) {
        this['merge_when_pipeline_succeeds'] = mergeWhenPipelineSucceeds;
    }
    public get mergeWhenPipelineSucceeds(): boolean | undefined {
        return this['merge_when_pipeline_succeeds'];
    }
    public withMergeStatus(mergeStatus: string): ResponseMergeRequestChanges {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSha(sha: string): ResponseMergeRequestChanges {
        this['sha'] = sha;
        return this;
    }
    public withShouldRemoveSourceBranch(shouldRemoveSourceBranch: boolean): ResponseMergeRequestChanges {
        this['should_remove_source_branch'] = shouldRemoveSourceBranch;
        return this;
    }
    public set shouldRemoveSourceBranch(shouldRemoveSourceBranch: boolean  | undefined) {
        this['should_remove_source_branch'] = shouldRemoveSourceBranch;
    }
    public get shouldRemoveSourceBranch(): boolean | undefined {
        return this['should_remove_source_branch'];
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): ResponseMergeRequestChanges {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withWebUrl(webUrl: string): ResponseMergeRequestChanges {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withSquash(squash: boolean): ResponseMergeRequestChanges {
        this['squash'] = squash;
        return this;
    }
    public withMergeRequestType(mergeRequestType: string): ResponseMergeRequestChanges {
        this['merge_request_type'] = mergeRequestType;
        return this;
    }
    public set mergeRequestType(mergeRequestType: string  | undefined) {
        this['merge_request_type'] = mergeRequestType;
    }
    public get mergeRequestType(): string | undefined {
        return this['merge_request_type'];
    }
    public withSubscribed(subscribed: boolean): ResponseMergeRequestChanges {
        this['subscribed'] = subscribed;
        return this;
    }
    public withChangesCount(changesCount: string): ResponseMergeRequestChanges {
        this['changes_count'] = changesCount;
        return this;
    }
    public set changesCount(changesCount: string  | undefined) {
        this['changes_count'] = changesCount;
    }
    public get changesCount(): string | undefined {
        return this['changes_count'];
    }
    public withLatestBuildStartedAt(latestBuildStartedAt: string): ResponseMergeRequestChanges {
        this['latest_build_started_at'] = latestBuildStartedAt;
        return this;
    }
    public set latestBuildStartedAt(latestBuildStartedAt: string  | undefined) {
        this['latest_build_started_at'] = latestBuildStartedAt;
    }
    public get latestBuildStartedAt(): string | undefined {
        return this['latest_build_started_at'];
    }
    public withLatestBuildFinishedAt(latestBuildFinishedAt: string): ResponseMergeRequestChanges {
        this['latest_build_finished_at'] = latestBuildFinishedAt;
        return this;
    }
    public set latestBuildFinishedAt(latestBuildFinishedAt: string  | undefined) {
        this['latest_build_finished_at'] = latestBuildFinishedAt;
    }
    public get latestBuildFinishedAt(): string | undefined {
        return this['latest_build_finished_at'];
    }
    public withFirstDeployedToProductionAt(firstDeployedToProductionAt: string): ResponseMergeRequestChanges {
        this['first_deployed_to_production_at'] = firstDeployedToProductionAt;
        return this;
    }
    public set firstDeployedToProductionAt(firstDeployedToProductionAt: string  | undefined) {
        this['first_deployed_to_production_at'] = firstDeployedToProductionAt;
    }
    public get firstDeployedToProductionAt(): string | undefined {
        return this['first_deployed_to_production_at'];
    }
    public withPipeline(pipeline: PipelineBasicDto): ResponseMergeRequestChanges {
        this['pipeline'] = pipeline;
        return this;
    }
    public withDiffRefs(diffRefs: DiffRefsDto): ResponseMergeRequestChanges {
        this['diff_refs'] = diffRefs;
        return this;
    }
    public set diffRefs(diffRefs: DiffRefsDto  | undefined) {
        this['diff_refs'] = diffRefs;
    }
    public get diffRefs(): DiffRefsDto | undefined {
        return this['diff_refs'];
    }
    public withMergeError(mergeError: string): ResponseMergeRequestChanges {
        this['merge_error'] = mergeError;
        return this;
    }
    public set mergeError(mergeError: string  | undefined) {
        this['merge_error'] = mergeError;
    }
    public get mergeError(): string | undefined {
        return this['merge_error'];
    }
    public withRebaseInProgress(rebaseInProgress: boolean): ResponseMergeRequestChanges {
        this['rebase_in_progress'] = rebaseInProgress;
        return this;
    }
    public set rebaseInProgress(rebaseInProgress: boolean  | undefined) {
        this['rebase_in_progress'] = rebaseInProgress;
    }
    public get rebaseInProgress(): boolean | undefined {
        return this['rebase_in_progress'];
    }
    public withDivergedCommitsCount(divergedCommitsCount: number): ResponseMergeRequestChanges {
        this['diverged_commits_count'] = divergedCommitsCount;
        return this;
    }
    public set divergedCommitsCount(divergedCommitsCount: number  | undefined) {
        this['diverged_commits_count'] = divergedCommitsCount;
    }
    public get divergedCommitsCount(): number | undefined {
        return this['diverged_commits_count'];
    }
    public withUser(user: MergeRequestListDtoUser): ResponseMergeRequestChanges {
        this['user'] = user;
        return this;
    }
    public withAddedLines(addedLines: number): ResponseMergeRequestChanges {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): ResponseMergeRequestChanges {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withChanges(changes: Array<MergeRequestDiffFileDto>): ResponseMergeRequestChanges {
        this['changes'] = changes;
        return this;
    }
    public withSourceProject(sourceProject: ProjectSimpleDto): ResponseMergeRequestChanges {
        this['source_project'] = sourceProject;
        return this;
    }
    public set sourceProject(sourceProject: ProjectSimpleDto  | undefined) {
        this['source_project'] = sourceProject;
    }
    public get sourceProject(): ProjectSimpleDto | undefined {
        return this['source_project'];
    }
}
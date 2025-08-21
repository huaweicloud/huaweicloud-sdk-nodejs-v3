import { NotesCountDto } from './NotesCountDto';
import { ProjectSimpleDto } from './ProjectSimpleDto';
import { UserBasicDto } from './UserBasicDto';


export class MergeRequestListBasicDto {
    public id?: number;
    public iid?: number;
    public title?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'source_repository_id'?: number;
    private 'review_mode'?: string;
    public author?: UserBasicDto;
    private 'closed_at'?: string;
    private 'closed_by'?: UserBasicDto;
    private 'merged_at'?: string;
    private 'merged_by'?: UserBasicDto;
    private 'pipeline_status'?: string;
    private 'codequality_status'?: string;
    private 'pipeline_status_with_code_quality'?: string;
    public notes?: number;
    private 'source_repository'?: ProjectSimpleDto;
    private 'target_repository'?: ProjectSimpleDto;
    private 'web_url'?: string;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    private 'merge_request_type'?: string;
    private 'source_git_url'?: string;
    public labels?: Array<{ [key: string]: object; }>;
    public score?: number;
    private 'min_merged_score'?: number;
    private 'source_product_id'?: string;
    private 'target_product_id'?: string;
    private 'product_name'?: string;
    private 'notes_count'?: NotesCountDto;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    public constructor() { 
    }
    public withId(id: number): MergeRequestListBasicDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MergeRequestListBasicDto {
        this['iid'] = iid;
        return this;
    }
    public withTitle(title: string): MergeRequestListBasicDto {
        this['title'] = title;
        return this;
    }
    public withSourceBranch(sourceBranch: string): MergeRequestListBasicDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): MergeRequestListBasicDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withState(state: string): MergeRequestListBasicDto {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): MergeRequestListBasicDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestListBasicDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSourceRepositoryId(sourceRepositoryId: number): MergeRequestListBasicDto {
        this['source_repository_id'] = sourceRepositoryId;
        return this;
    }
    public set sourceRepositoryId(sourceRepositoryId: number  | undefined) {
        this['source_repository_id'] = sourceRepositoryId;
    }
    public get sourceRepositoryId(): number | undefined {
        return this['source_repository_id'];
    }
    public withReviewMode(reviewMode: string): MergeRequestListBasicDto {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): string | undefined {
        return this['review_mode'];
    }
    public withAuthor(author: UserBasicDto): MergeRequestListBasicDto {
        this['author'] = author;
        return this;
    }
    public withClosedAt(closedAt: string): MergeRequestListBasicDto {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withClosedBy(closedBy: UserBasicDto): MergeRequestListBasicDto {
        this['closed_by'] = closedBy;
        return this;
    }
    public set closedBy(closedBy: UserBasicDto  | undefined) {
        this['closed_by'] = closedBy;
    }
    public get closedBy(): UserBasicDto | undefined {
        return this['closed_by'];
    }
    public withMergedAt(mergedAt: string): MergeRequestListBasicDto {
        this['merged_at'] = mergedAt;
        return this;
    }
    public set mergedAt(mergedAt: string  | undefined) {
        this['merged_at'] = mergedAt;
    }
    public get mergedAt(): string | undefined {
        return this['merged_at'];
    }
    public withMergedBy(mergedBy: UserBasicDto): MergeRequestListBasicDto {
        this['merged_by'] = mergedBy;
        return this;
    }
    public set mergedBy(mergedBy: UserBasicDto  | undefined) {
        this['merged_by'] = mergedBy;
    }
    public get mergedBy(): UserBasicDto | undefined {
        return this['merged_by'];
    }
    public withPipelineStatus(pipelineStatus: string): MergeRequestListBasicDto {
        this['pipeline_status'] = pipelineStatus;
        return this;
    }
    public set pipelineStatus(pipelineStatus: string  | undefined) {
        this['pipeline_status'] = pipelineStatus;
    }
    public get pipelineStatus(): string | undefined {
        return this['pipeline_status'];
    }
    public withCodequalityStatus(codequalityStatus: string): MergeRequestListBasicDto {
        this['codequality_status'] = codequalityStatus;
        return this;
    }
    public set codequalityStatus(codequalityStatus: string  | undefined) {
        this['codequality_status'] = codequalityStatus;
    }
    public get codequalityStatus(): string | undefined {
        return this['codequality_status'];
    }
    public withPipelineStatusWithCodeQuality(pipelineStatusWithCodeQuality: string): MergeRequestListBasicDto {
        this['pipeline_status_with_code_quality'] = pipelineStatusWithCodeQuality;
        return this;
    }
    public set pipelineStatusWithCodeQuality(pipelineStatusWithCodeQuality: string  | undefined) {
        this['pipeline_status_with_code_quality'] = pipelineStatusWithCodeQuality;
    }
    public get pipelineStatusWithCodeQuality(): string | undefined {
        return this['pipeline_status_with_code_quality'];
    }
    public withNotes(notes: number): MergeRequestListBasicDto {
        this['notes'] = notes;
        return this;
    }
    public withSourceRepository(sourceRepository: ProjectSimpleDto): MergeRequestListBasicDto {
        this['source_repository'] = sourceRepository;
        return this;
    }
    public set sourceRepository(sourceRepository: ProjectSimpleDto  | undefined) {
        this['source_repository'] = sourceRepository;
    }
    public get sourceRepository(): ProjectSimpleDto | undefined {
        return this['source_repository'];
    }
    public withTargetRepository(targetRepository: ProjectSimpleDto): MergeRequestListBasicDto {
        this['target_repository'] = targetRepository;
        return this;
    }
    public set targetRepository(targetRepository: ProjectSimpleDto  | undefined) {
        this['target_repository'] = targetRepository;
    }
    public get targetRepository(): ProjectSimpleDto | undefined {
        return this['target_repository'];
    }
    public withWebUrl(webUrl: string): MergeRequestListBasicDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withAddedLines(addedLines: number): MergeRequestListBasicDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): MergeRequestListBasicDto {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withMergeRequestType(mergeRequestType: string): MergeRequestListBasicDto {
        this['merge_request_type'] = mergeRequestType;
        return this;
    }
    public set mergeRequestType(mergeRequestType: string  | undefined) {
        this['merge_request_type'] = mergeRequestType;
    }
    public get mergeRequestType(): string | undefined {
        return this['merge_request_type'];
    }
    public withSourceGitUrl(sourceGitUrl: string): MergeRequestListBasicDto {
        this['source_git_url'] = sourceGitUrl;
        return this;
    }
    public set sourceGitUrl(sourceGitUrl: string  | undefined) {
        this['source_git_url'] = sourceGitUrl;
    }
    public get sourceGitUrl(): string | undefined {
        return this['source_git_url'];
    }
    public withLabels(labels: Array<{ [key: string]: object; }>): MergeRequestListBasicDto {
        this['labels'] = labels;
        return this;
    }
    public withScore(score: number): MergeRequestListBasicDto {
        this['score'] = score;
        return this;
    }
    public withMinMergedScore(minMergedScore: number): MergeRequestListBasicDto {
        this['min_merged_score'] = minMergedScore;
        return this;
    }
    public set minMergedScore(minMergedScore: number  | undefined) {
        this['min_merged_score'] = minMergedScore;
    }
    public get minMergedScore(): number | undefined {
        return this['min_merged_score'];
    }
    public withSourceProductId(sourceProductId: string): MergeRequestListBasicDto {
        this['source_product_id'] = sourceProductId;
        return this;
    }
    public set sourceProductId(sourceProductId: string  | undefined) {
        this['source_product_id'] = sourceProductId;
    }
    public get sourceProductId(): string | undefined {
        return this['source_product_id'];
    }
    public withTargetProductId(targetProductId: string): MergeRequestListBasicDto {
        this['target_product_id'] = targetProductId;
        return this;
    }
    public set targetProductId(targetProductId: string  | undefined) {
        this['target_product_id'] = targetProductId;
    }
    public get targetProductId(): string | undefined {
        return this['target_product_id'];
    }
    public withProductName(productName: string): MergeRequestListBasicDto {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withNotesCount(notesCount: NotesCountDto): MergeRequestListBasicDto {
        this['notes_count'] = notesCount;
        return this;
    }
    public set notesCount(notesCount: NotesCountDto  | undefined) {
        this['notes_count'] = notesCount;
    }
    public get notesCount(): NotesCountDto | undefined {
        return this['notes_count'];
    }
    public withModerationResult(moderationResult: boolean): MergeRequestListBasicDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): MergeRequestListBasicDto {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): MergeRequestListBasicDto {
        this['moderation_status'] = moderationStatus;
        return this;
    }
    public set moderationStatus(moderationStatus: number  | undefined) {
        this['moderation_status'] = moderationStatus;
    }
    public get moderationStatus(): number | undefined {
        return this['moderation_status'];
    }
}
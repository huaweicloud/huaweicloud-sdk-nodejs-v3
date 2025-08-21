import { UserBasicDto } from './UserBasicDto';


export class ReviewDto {
    public assignee?: UserBasicDto;
    public author?: UserBasicDto;
    public note?: string;
    private 'created_at'?: string;
    private 'is_reply'?: boolean;
    private 'resolved_by'?: UserBasicDto;
    private 'discussion_id'?: string;
    private 'repository_path'?: string;
    private 'repository_id'?: number;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: ReviewDtoSeverityEnum | string;
    private 'severity_cn'?: string;
    private 'severity_en'?: ReviewDtoSeverityEnEnum | string;
    public proposer?: UserBasicDto;
    public reviewer?: UserBasicDto;
    public resolved?: boolean;
    private 'resolved_at'?: string;
    public link?: string;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    private 'merge_request_id'?: number;
    private 'merge_request_iid'?: number;
    private 'merge_request_title'?: string;
    private 'merge_request_state'?: string;
    private 'commit_id'?: string;
    public constructor() { 
    }
    public withAssignee(assignee: UserBasicDto): ReviewDto {
        this['assignee'] = assignee;
        return this;
    }
    public withAuthor(author: UserBasicDto): ReviewDto {
        this['author'] = author;
        return this;
    }
    public withNote(note: string): ReviewDto {
        this['note'] = note;
        return this;
    }
    public withCreatedAt(createdAt: string): ReviewDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withIsReply(isReply: boolean): ReviewDto {
        this['is_reply'] = isReply;
        return this;
    }
    public set isReply(isReply: boolean  | undefined) {
        this['is_reply'] = isReply;
    }
    public get isReply(): boolean | undefined {
        return this['is_reply'];
    }
    public withResolvedBy(resolvedBy: UserBasicDto): ReviewDto {
        this['resolved_by'] = resolvedBy;
        return this;
    }
    public set resolvedBy(resolvedBy: UserBasicDto  | undefined) {
        this['resolved_by'] = resolvedBy;
    }
    public get resolvedBy(): UserBasicDto | undefined {
        return this['resolved_by'];
    }
    public withDiscussionId(discussionId: string): ReviewDto {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withRepositoryPath(repositoryPath: string): ReviewDto {
        this['repository_path'] = repositoryPath;
        return this;
    }
    public set repositoryPath(repositoryPath: string  | undefined) {
        this['repository_path'] = repositoryPath;
    }
    public get repositoryPath(): string | undefined {
        return this['repository_path'];
    }
    public withRepositoryId(repositoryId: number): ReviewDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withReviewCategories(reviewCategories: string): ReviewDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): ReviewDto {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): ReviewDto {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): ReviewDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: ReviewDtoSeverityEnum | string): ReviewDto {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): ReviewDto {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: ReviewDtoSeverityEnEnum | string): ReviewDto {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: ReviewDtoSeverityEnEnum | string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): ReviewDtoSeverityEnEnum | string | undefined {
        return this['severity_en'];
    }
    public withProposer(proposer: UserBasicDto): ReviewDto {
        this['proposer'] = proposer;
        return this;
    }
    public withReviewer(reviewer: UserBasicDto): ReviewDto {
        this['reviewer'] = reviewer;
        return this;
    }
    public withResolved(resolved: boolean): ReviewDto {
        this['resolved'] = resolved;
        return this;
    }
    public withResolvedAt(resolvedAt: string): ReviewDto {
        this['resolved_at'] = resolvedAt;
        return this;
    }
    public set resolvedAt(resolvedAt: string  | undefined) {
        this['resolved_at'] = resolvedAt;
    }
    public get resolvedAt(): string | undefined {
        return this['resolved_at'];
    }
    public withLink(link: string): ReviewDto {
        this['link'] = link;
        return this;
    }
    public withModerationResult(moderationResult: boolean): ReviewDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): ReviewDto {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): ReviewDto {
        this['moderation_status'] = moderationStatus;
        return this;
    }
    public set moderationStatus(moderationStatus: number  | undefined) {
        this['moderation_status'] = moderationStatus;
    }
    public get moderationStatus(): number | undefined {
        return this['moderation_status'];
    }
    public withMergeRequestId(mergeRequestId: number): ReviewDto {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ReviewDto {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withMergeRequestTitle(mergeRequestTitle: string): ReviewDto {
        this['merge_request_title'] = mergeRequestTitle;
        return this;
    }
    public set mergeRequestTitle(mergeRequestTitle: string  | undefined) {
        this['merge_request_title'] = mergeRequestTitle;
    }
    public get mergeRequestTitle(): string | undefined {
        return this['merge_request_title'];
    }
    public withMergeRequestState(mergeRequestState: string): ReviewDto {
        this['merge_request_state'] = mergeRequestState;
        return this;
    }
    public set mergeRequestState(mergeRequestState: string  | undefined) {
        this['merge_request_state'] = mergeRequestState;
    }
    public get mergeRequestState(): string | undefined {
        return this['merge_request_state'];
    }
    public withCommitId(commitId: string): ReviewDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReviewDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum ReviewDtoSeverityEnEnum {
    SUGGESTION = 'Suggestion',
    MINOR = 'Minor',
    MAJOR = 'Major',
    FATAL = 'Fatal'
}

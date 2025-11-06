import { PositionDto } from './PositionDto';
import { UserBasicDto } from './UserBasicDto';


export class CommitNoteDto {
    public id?: number;
    private 'noteable_type'?: CommitNoteDtoNoteableTypeEnum | string;
    private 'commit_id'?: string;
    private 'discussion_id'?: string;
    public type?: CommitNoteDtoTypeEnum | string;
    public body?: string;
    private 'diff_file'?: string;
    public diff?: string;
    public attachment?: string;
    public author?: UserBasicDto;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public system?: boolean;
    private 'noteable_id'?: number;
    public position?: PositionDto;
    public resolvable?: boolean;
    public resolved?: boolean;
    private 'resolved_by'?: UserBasicDto;
    public archived?: boolean;
    private 'noteable_iid'?: number;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: CommitNoteDtoSeverityEnum | string;
    private 'severity_cn'?: string;
    private 'severity_en'?: CommitNoteDtoSeverityEnEnum | string;
    private 'file_path'?: string;
    public line?: string;
    public assignee?: UserBasicDto;
    public proposer?: UserBasicDto;
    private 'is_reply'?: boolean;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    public constructor() { 
    }
    public withId(id: number): CommitNoteDto {
        this['id'] = id;
        return this;
    }
    public withNoteableType(noteableType: CommitNoteDtoNoteableTypeEnum | string): CommitNoteDto {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: CommitNoteDtoNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): CommitNoteDtoNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withCommitId(commitId: string): CommitNoteDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withDiscussionId(discussionId: string): CommitNoteDto {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withType(type: CommitNoteDtoTypeEnum | string): CommitNoteDto {
        this['type'] = type;
        return this;
    }
    public withBody(body: string): CommitNoteDto {
        this['body'] = body;
        return this;
    }
    public withDiffFile(diffFile: string): CommitNoteDto {
        this['diff_file'] = diffFile;
        return this;
    }
    public set diffFile(diffFile: string  | undefined) {
        this['diff_file'] = diffFile;
    }
    public get diffFile(): string | undefined {
        return this['diff_file'];
    }
    public withDiff(diff: string): CommitNoteDto {
        this['diff'] = diff;
        return this;
    }
    public withAttachment(attachment: string): CommitNoteDto {
        this['attachment'] = attachment;
        return this;
    }
    public withAuthor(author: UserBasicDto): CommitNoteDto {
        this['author'] = author;
        return this;
    }
    public withCreatedAt(createdAt: string): CommitNoteDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CommitNoteDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSystem(system: boolean): CommitNoteDto {
        this['system'] = system;
        return this;
    }
    public withNoteableId(noteableId: number): CommitNoteDto {
        this['noteable_id'] = noteableId;
        return this;
    }
    public set noteableId(noteableId: number  | undefined) {
        this['noteable_id'] = noteableId;
    }
    public get noteableId(): number | undefined {
        return this['noteable_id'];
    }
    public withPosition(position: PositionDto): CommitNoteDto {
        this['position'] = position;
        return this;
    }
    public withResolvable(resolvable: boolean): CommitNoteDto {
        this['resolvable'] = resolvable;
        return this;
    }
    public withResolved(resolved: boolean): CommitNoteDto {
        this['resolved'] = resolved;
        return this;
    }
    public withResolvedBy(resolvedBy: UserBasicDto): CommitNoteDto {
        this['resolved_by'] = resolvedBy;
        return this;
    }
    public set resolvedBy(resolvedBy: UserBasicDto  | undefined) {
        this['resolved_by'] = resolvedBy;
    }
    public get resolvedBy(): UserBasicDto | undefined {
        return this['resolved_by'];
    }
    public withArchived(archived: boolean): CommitNoteDto {
        this['archived'] = archived;
        return this;
    }
    public withNoteableIid(noteableIid: number): CommitNoteDto {
        this['noteable_iid'] = noteableIid;
        return this;
    }
    public set noteableIid(noteableIid: number  | undefined) {
        this['noteable_iid'] = noteableIid;
    }
    public get noteableIid(): number | undefined {
        return this['noteable_iid'];
    }
    public withReviewCategories(reviewCategories: string): CommitNoteDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): CommitNoteDto {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): CommitNoteDto {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): CommitNoteDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: CommitNoteDtoSeverityEnum | string): CommitNoteDto {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): CommitNoteDto {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: CommitNoteDtoSeverityEnEnum | string): CommitNoteDto {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: CommitNoteDtoSeverityEnEnum | string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): CommitNoteDtoSeverityEnEnum | string | undefined {
        return this['severity_en'];
    }
    public withFilePath(filePath: string): CommitNoteDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withLine(line: string): CommitNoteDto {
        this['line'] = line;
        return this;
    }
    public withAssignee(assignee: UserBasicDto): CommitNoteDto {
        this['assignee'] = assignee;
        return this;
    }
    public withProposer(proposer: UserBasicDto): CommitNoteDto {
        this['proposer'] = proposer;
        return this;
    }
    public withIsReply(isReply: boolean): CommitNoteDto {
        this['is_reply'] = isReply;
        return this;
    }
    public set isReply(isReply: boolean  | undefined) {
        this['is_reply'] = isReply;
    }
    public get isReply(): boolean | undefined {
        return this['is_reply'];
    }
    public withModerationResult(moderationResult: boolean): CommitNoteDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): CommitNoteDto {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): CommitNoteDto {
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

/**
    * @export
    * @enum {string}
    */
export enum CommitNoteDtoNoteableTypeEnum {
    MERGEREQUEST = 'MergeRequest',
    COMMIT = 'Commit'
}
/**
    * @export
    * @enum {string}
    */
export enum CommitNoteDtoTypeEnum {
    DISCUSSIONNOTE = 'DiscussionNote',
    DIFFNOTE = 'DiffNote'
}
/**
    * @export
    * @enum {string}
    */
export enum CommitNoteDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum CommitNoteDtoSeverityEnEnum {
    SUGGESTION = 'Suggestion',
    MINOR = 'Minor',
    MAJOR = 'Major',
    FATAL = 'Fatal'
}

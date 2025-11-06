import { PositionDto } from './PositionDto';
import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMergeRequestDiscussionResponseResponse extends SdkResponse {
    public id?: number;
    public type?: string;
    public body?: string;
    public attachment?: string;
    public author?: UserBasicDto;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public system?: boolean;
    private 'noteable_id'?: number;
    private 'noteable_type'?: CreateMergeRequestDiscussionResponseResponseNoteableTypeEnum | string;
    private 'commit_id'?: string;
    public resolvable?: boolean;
    private 'is_reply'?: boolean;
    private 'resolved_by'?: UserBasicDto;
    private 'noteable_iid'?: number;
    private 'discussion_id'?: string;
    public repository?: string;
    private 'diff_file'?: string;
    public diff?: string;
    public archived?: boolean;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: CreateMergeRequestDiscussionResponseResponseSeverityEnum | string;
    private 'severity_cn'?: string;
    private 'severity_en'?: CreateMergeRequestDiscussionResponseResponseSeverityEnEnum | string;
    private 'file_path'?: string;
    public line?: string;
    public assignee?: UserBasicDto;
    public proposer?: UserBasicDto;
    public position?: PositionDto;
    public resolved?: boolean;
    private 'is_outdated'?: boolean;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateMergeRequestDiscussionResponseResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CreateMergeRequestDiscussionResponseResponse {
        this['type'] = type;
        return this;
    }
    public withBody(body: string): CreateMergeRequestDiscussionResponseResponse {
        this['body'] = body;
        return this;
    }
    public withAttachment(attachment: string): CreateMergeRequestDiscussionResponseResponse {
        this['attachment'] = attachment;
        return this;
    }
    public withAuthor(author: UserBasicDto): CreateMergeRequestDiscussionResponseResponse {
        this['author'] = author;
        return this;
    }
    public withCreatedAt(createdAt: string): CreateMergeRequestDiscussionResponseResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateMergeRequestDiscussionResponseResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSystem(system: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['system'] = system;
        return this;
    }
    public withNoteableId(noteableId: number): CreateMergeRequestDiscussionResponseResponse {
        this['noteable_id'] = noteableId;
        return this;
    }
    public set noteableId(noteableId: number  | undefined) {
        this['noteable_id'] = noteableId;
    }
    public get noteableId(): number | undefined {
        return this['noteable_id'];
    }
    public withNoteableType(noteableType: CreateMergeRequestDiscussionResponseResponseNoteableTypeEnum | string): CreateMergeRequestDiscussionResponseResponse {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: CreateMergeRequestDiscussionResponseResponseNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): CreateMergeRequestDiscussionResponseResponseNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withCommitId(commitId: string): CreateMergeRequestDiscussionResponseResponse {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withResolvable(resolvable: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['resolvable'] = resolvable;
        return this;
    }
    public withIsReply(isReply: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['is_reply'] = isReply;
        return this;
    }
    public set isReply(isReply: boolean  | undefined) {
        this['is_reply'] = isReply;
    }
    public get isReply(): boolean | undefined {
        return this['is_reply'];
    }
    public withResolvedBy(resolvedBy: UserBasicDto): CreateMergeRequestDiscussionResponseResponse {
        this['resolved_by'] = resolvedBy;
        return this;
    }
    public set resolvedBy(resolvedBy: UserBasicDto  | undefined) {
        this['resolved_by'] = resolvedBy;
    }
    public get resolvedBy(): UserBasicDto | undefined {
        return this['resolved_by'];
    }
    public withNoteableIid(noteableIid: number): CreateMergeRequestDiscussionResponseResponse {
        this['noteable_iid'] = noteableIid;
        return this;
    }
    public set noteableIid(noteableIid: number  | undefined) {
        this['noteable_iid'] = noteableIid;
    }
    public get noteableIid(): number | undefined {
        return this['noteable_iid'];
    }
    public withDiscussionId(discussionId: string): CreateMergeRequestDiscussionResponseResponse {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withRepository(repository: string): CreateMergeRequestDiscussionResponseResponse {
        this['repository'] = repository;
        return this;
    }
    public withDiffFile(diffFile: string): CreateMergeRequestDiscussionResponseResponse {
        this['diff_file'] = diffFile;
        return this;
    }
    public set diffFile(diffFile: string  | undefined) {
        this['diff_file'] = diffFile;
    }
    public get diffFile(): string | undefined {
        return this['diff_file'];
    }
    public withDiff(diff: string): CreateMergeRequestDiscussionResponseResponse {
        this['diff'] = diff;
        return this;
    }
    public withArchived(archived: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['archived'] = archived;
        return this;
    }
    public withReviewCategories(reviewCategories: string): CreateMergeRequestDiscussionResponseResponse {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): CreateMergeRequestDiscussionResponseResponse {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): CreateMergeRequestDiscussionResponseResponse {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): CreateMergeRequestDiscussionResponseResponse {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: CreateMergeRequestDiscussionResponseResponseSeverityEnum | string): CreateMergeRequestDiscussionResponseResponse {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): CreateMergeRequestDiscussionResponseResponse {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: CreateMergeRequestDiscussionResponseResponseSeverityEnEnum | string): CreateMergeRequestDiscussionResponseResponse {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: CreateMergeRequestDiscussionResponseResponseSeverityEnEnum | string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): CreateMergeRequestDiscussionResponseResponseSeverityEnEnum | string | undefined {
        return this['severity_en'];
    }
    public withFilePath(filePath: string): CreateMergeRequestDiscussionResponseResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withLine(line: string): CreateMergeRequestDiscussionResponseResponse {
        this['line'] = line;
        return this;
    }
    public withAssignee(assignee: UserBasicDto): CreateMergeRequestDiscussionResponseResponse {
        this['assignee'] = assignee;
        return this;
    }
    public withProposer(proposer: UserBasicDto): CreateMergeRequestDiscussionResponseResponse {
        this['proposer'] = proposer;
        return this;
    }
    public withPosition(position: PositionDto): CreateMergeRequestDiscussionResponseResponse {
        this['position'] = position;
        return this;
    }
    public withResolved(resolved: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['resolved'] = resolved;
        return this;
    }
    public withIsOutdated(isOutdated: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['is_outdated'] = isOutdated;
        return this;
    }
    public set isOutdated(isOutdated: boolean  | undefined) {
        this['is_outdated'] = isOutdated;
    }
    public get isOutdated(): boolean | undefined {
        return this['is_outdated'];
    }
    public withModerationResult(moderationResult: boolean): CreateMergeRequestDiscussionResponseResponse {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): CreateMergeRequestDiscussionResponseResponse {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): CreateMergeRequestDiscussionResponseResponse {
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
export enum CreateMergeRequestDiscussionResponseResponseNoteableTypeEnum {
    MERGEREQUEST = 'MergeRequest',
    COMMIT = 'Commit'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMergeRequestDiscussionResponseResponseSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMergeRequestDiscussionResponseResponseSeverityEnEnum {
    SUGGESTION = 'Suggestion',
    MINOR = 'Minor',
    MAJOR = 'Major',
    FATAL = 'Fatal'
}

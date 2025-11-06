import { PositionDto } from './PositionDto';
import { UserBasicDto } from './UserBasicDto';


export class NoteDto {
    public id?: number;
    public type?: string;
    public body?: string;
    public attachment?: string;
    public author?: UserBasicDto;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public system?: boolean;
    private 'noteable_id'?: number;
    private 'noteable_type'?: string;
    private 'commit_id'?: string;
    public resolvable?: boolean;
    private 'is_reply'?: boolean;
    private 'resolved_by'?: UserBasicDto;
    private 'noteable_iid'?: number;
    private 'discussion_id'?: string;
    public project?: string;
    private 'diff_file'?: string;
    public diff?: string;
    public archived?: boolean;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: string;
    private 'severity_cn'?: string;
    private 'severity_en'?: string;
    private 'file_path'?: string;
    public line?: string;
    public assignee?: UserBasicDto;
    public proposer?: UserBasicDto;
    public position?: PositionDto;
    public resolved?: boolean;
    private 'is_outdated'?: boolean;
    public constructor() { 
    }
    public withId(id: number): NoteDto {
        this['id'] = id;
        return this;
    }
    public withType(type: string): NoteDto {
        this['type'] = type;
        return this;
    }
    public withBody(body: string): NoteDto {
        this['body'] = body;
        return this;
    }
    public withAttachment(attachment: string): NoteDto {
        this['attachment'] = attachment;
        return this;
    }
    public withAuthor(author: UserBasicDto): NoteDto {
        this['author'] = author;
        return this;
    }
    public withCreatedAt(createdAt: string): NoteDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): NoteDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withSystem(system: boolean): NoteDto {
        this['system'] = system;
        return this;
    }
    public withNoteableId(noteableId: number): NoteDto {
        this['noteable_id'] = noteableId;
        return this;
    }
    public set noteableId(noteableId: number  | undefined) {
        this['noteable_id'] = noteableId;
    }
    public get noteableId(): number | undefined {
        return this['noteable_id'];
    }
    public withNoteableType(noteableType: string): NoteDto {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): string | undefined {
        return this['noteable_type'];
    }
    public withCommitId(commitId: string): NoteDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withResolvable(resolvable: boolean): NoteDto {
        this['resolvable'] = resolvable;
        return this;
    }
    public withIsReply(isReply: boolean): NoteDto {
        this['is_reply'] = isReply;
        return this;
    }
    public set isReply(isReply: boolean  | undefined) {
        this['is_reply'] = isReply;
    }
    public get isReply(): boolean | undefined {
        return this['is_reply'];
    }
    public withResolvedBy(resolvedBy: UserBasicDto): NoteDto {
        this['resolved_by'] = resolvedBy;
        return this;
    }
    public set resolvedBy(resolvedBy: UserBasicDto  | undefined) {
        this['resolved_by'] = resolvedBy;
    }
    public get resolvedBy(): UserBasicDto | undefined {
        return this['resolved_by'];
    }
    public withNoteableIid(noteableIid: number): NoteDto {
        this['noteable_iid'] = noteableIid;
        return this;
    }
    public set noteableIid(noteableIid: number  | undefined) {
        this['noteable_iid'] = noteableIid;
    }
    public get noteableIid(): number | undefined {
        return this['noteable_iid'];
    }
    public withDiscussionId(discussionId: string): NoteDto {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withProject(project: string): NoteDto {
        this['project'] = project;
        return this;
    }
    public withDiffFile(diffFile: string): NoteDto {
        this['diff_file'] = diffFile;
        return this;
    }
    public set diffFile(diffFile: string  | undefined) {
        this['diff_file'] = diffFile;
    }
    public get diffFile(): string | undefined {
        return this['diff_file'];
    }
    public withDiff(diff: string): NoteDto {
        this['diff'] = diff;
        return this;
    }
    public withArchived(archived: boolean): NoteDto {
        this['archived'] = archived;
        return this;
    }
    public withReviewCategories(reviewCategories: string): NoteDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): NoteDto {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): NoteDto {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): NoteDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: string): NoteDto {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): NoteDto {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: string): NoteDto {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): string | undefined {
        return this['severity_en'];
    }
    public withFilePath(filePath: string): NoteDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withLine(line: string): NoteDto {
        this['line'] = line;
        return this;
    }
    public withAssignee(assignee: UserBasicDto): NoteDto {
        this['assignee'] = assignee;
        return this;
    }
    public withProposer(proposer: UserBasicDto): NoteDto {
        this['proposer'] = proposer;
        return this;
    }
    public withPosition(position: PositionDto): NoteDto {
        this['position'] = position;
        return this;
    }
    public withResolved(resolved: boolean): NoteDto {
        this['resolved'] = resolved;
        return this;
    }
    public withIsOutdated(isOutdated: boolean): NoteDto {
        this['is_outdated'] = isOutdated;
        return this;
    }
    public set isOutdated(isOutdated: boolean  | undefined) {
        this['is_outdated'] = isOutdated;
    }
    public get isOutdated(): boolean | undefined {
        return this['is_outdated'];
    }
}
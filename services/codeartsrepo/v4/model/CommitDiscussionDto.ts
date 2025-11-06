import { CommitNoteDto } from './CommitNoteDto';
import { UserBasicDto } from './UserBasicDto';


export class CommitDiscussionDto {
    public id?: string;
    private 'individual_note'?: boolean;
    public notes?: Array<CommitNoteDto>;
    private 'repository_id'?: number;
    private 'noteable_type'?: CommitDiscussionDtoNoteableTypeEnum | string;
    private 'commit_id'?: string;
    private 'repository_full_path'?: string;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'deleted_file'?: boolean;
    private 'new_file'?: boolean;
    private 'diff_file'?: boolean;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    public resolved?: boolean;
    public archived?: boolean;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: CommitDiscussionDtoSeverityEnum | string;
    private 'severity_cn'?: string;
    private 'severity_en'?: CommitDiscussionDtoSeverityEnEnum | string;
    public assignee?: UserBasicDto;
    public proposer?: UserBasicDto;
    public constructor() { 
    }
    public withId(id: string): CommitDiscussionDto {
        this['id'] = id;
        return this;
    }
    public withIndividualNote(individualNote: boolean): CommitDiscussionDto {
        this['individual_note'] = individualNote;
        return this;
    }
    public set individualNote(individualNote: boolean  | undefined) {
        this['individual_note'] = individualNote;
    }
    public get individualNote(): boolean | undefined {
        return this['individual_note'];
    }
    public withNotes(notes: Array<CommitNoteDto>): CommitDiscussionDto {
        this['notes'] = notes;
        return this;
    }
    public withRepositoryId(repositoryId: number): CommitDiscussionDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withNoteableType(noteableType: CommitDiscussionDtoNoteableTypeEnum | string): CommitDiscussionDto {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: CommitDiscussionDtoNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): CommitDiscussionDtoNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withCommitId(commitId: string): CommitDiscussionDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withRepositoryFullPath(repositoryFullPath: string): CommitDiscussionDto {
        this['repository_full_path'] = repositoryFullPath;
        return this;
    }
    public set repositoryFullPath(repositoryFullPath: string  | undefined) {
        this['repository_full_path'] = repositoryFullPath;
    }
    public get repositoryFullPath(): string | undefined {
        return this['repository_full_path'];
    }
    public withAMode(aMode: string): CommitDiscussionDto {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): CommitDiscussionDto {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withDeletedFile(deletedFile: boolean): CommitDiscussionDto {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withNewFile(newFile: boolean): CommitDiscussionDto {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withDiffFile(diffFile: boolean): CommitDiscussionDto {
        this['diff_file'] = diffFile;
        return this;
    }
    public set diffFile(diffFile: boolean  | undefined) {
        this['diff_file'] = diffFile;
    }
    public get diffFile(): boolean | undefined {
        return this['diff_file'];
    }
    public withAddedLines(addedLines: number): CommitDiscussionDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): CommitDiscussionDto {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
    public withResolved(resolved: boolean): CommitDiscussionDto {
        this['resolved'] = resolved;
        return this;
    }
    public withArchived(archived: boolean): CommitDiscussionDto {
        this['archived'] = archived;
        return this;
    }
    public withReviewCategories(reviewCategories: string): CommitDiscussionDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): CommitDiscussionDto {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): CommitDiscussionDto {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): CommitDiscussionDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: CommitDiscussionDtoSeverityEnum | string): CommitDiscussionDto {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): CommitDiscussionDto {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: CommitDiscussionDtoSeverityEnEnum | string): CommitDiscussionDto {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: CommitDiscussionDtoSeverityEnEnum | string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): CommitDiscussionDtoSeverityEnEnum | string | undefined {
        return this['severity_en'];
    }
    public withAssignee(assignee: UserBasicDto): CommitDiscussionDto {
        this['assignee'] = assignee;
        return this;
    }
    public withProposer(proposer: UserBasicDto): CommitDiscussionDto {
        this['proposer'] = proposer;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommitDiscussionDtoNoteableTypeEnum {
    MERGEREQUEST = 'MergeRequest',
    COMMIT = 'Commit'
}
/**
    * @export
    * @enum {string}
    */
export enum CommitDiscussionDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum CommitDiscussionDtoSeverityEnEnum {
    SUGGESTION = 'Suggestion',
    MINOR = 'Minor',
    MAJOR = 'Major',
    FATAL = 'Fatal'
}

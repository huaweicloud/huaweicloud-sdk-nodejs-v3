import { MergeRequestVersionParamsDto } from './MergeRequestVersionParamsDto';
import { NoteDto } from './NoteDto';
import { UserBasicDto } from './UserBasicDto';


export class MergeRequestBasicDiscussionDto {
    public id?: string;
    private 'individual_note'?: boolean;
    public notes?: Array<NoteDto>;
    private 'repository_id'?: number;
    private 'noteable_type'?: MergeRequestBasicDiscussionDtoNoteableTypeEnum | string;
    private 'commit_id'?: string;
    private 'repository_full_path'?: string;
    private 'a_mode'?: string;
    private 'b_mode'?: string;
    private 'deleted_file'?: boolean;
    private 'new_file'?: boolean;
    public resolved?: boolean;
    public archived?: boolean;
    private 'review_categories'?: string;
    private 'review_categories_cn'?: string;
    private 'review_categories_en'?: string;
    private 'review_modules'?: string;
    public severity?: MergeRequestBasicDiscussionDtoSeverityEnum | string;
    private 'severity_cn'?: string;
    private 'severity_en'?: MergeRequestBasicDiscussionDtoSeverityEnEnum | string;
    public assignee?: UserBasicDto;
    public proposer?: UserBasicDto;
    private 'merge_request_version_params'?: MergeRequestVersionParamsDto;
    public constructor() { 
    }
    public withId(id: string): MergeRequestBasicDiscussionDto {
        this['id'] = id;
        return this;
    }
    public withIndividualNote(individualNote: boolean): MergeRequestBasicDiscussionDto {
        this['individual_note'] = individualNote;
        return this;
    }
    public set individualNote(individualNote: boolean  | undefined) {
        this['individual_note'] = individualNote;
    }
    public get individualNote(): boolean | undefined {
        return this['individual_note'];
    }
    public withNotes(notes: Array<NoteDto>): MergeRequestBasicDiscussionDto {
        this['notes'] = notes;
        return this;
    }
    public withRepositoryId(repositoryId: number): MergeRequestBasicDiscussionDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withNoteableType(noteableType: MergeRequestBasicDiscussionDtoNoteableTypeEnum | string): MergeRequestBasicDiscussionDto {
        this['noteable_type'] = noteableType;
        return this;
    }
    public set noteableType(noteableType: MergeRequestBasicDiscussionDtoNoteableTypeEnum | string  | undefined) {
        this['noteable_type'] = noteableType;
    }
    public get noteableType(): MergeRequestBasicDiscussionDtoNoteableTypeEnum | string | undefined {
        return this['noteable_type'];
    }
    public withCommitId(commitId: string): MergeRequestBasicDiscussionDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withRepositoryFullPath(repositoryFullPath: string): MergeRequestBasicDiscussionDto {
        this['repository_full_path'] = repositoryFullPath;
        return this;
    }
    public set repositoryFullPath(repositoryFullPath: string  | undefined) {
        this['repository_full_path'] = repositoryFullPath;
    }
    public get repositoryFullPath(): string | undefined {
        return this['repository_full_path'];
    }
    public withAMode(aMode: string): MergeRequestBasicDiscussionDto {
        this['a_mode'] = aMode;
        return this;
    }
    public set aMode(aMode: string  | undefined) {
        this['a_mode'] = aMode;
    }
    public get aMode(): string | undefined {
        return this['a_mode'];
    }
    public withBMode(bMode: string): MergeRequestBasicDiscussionDto {
        this['b_mode'] = bMode;
        return this;
    }
    public set bMode(bMode: string  | undefined) {
        this['b_mode'] = bMode;
    }
    public get bMode(): string | undefined {
        return this['b_mode'];
    }
    public withDeletedFile(deletedFile: boolean): MergeRequestBasicDiscussionDto {
        this['deleted_file'] = deletedFile;
        return this;
    }
    public set deletedFile(deletedFile: boolean  | undefined) {
        this['deleted_file'] = deletedFile;
    }
    public get deletedFile(): boolean | undefined {
        return this['deleted_file'];
    }
    public withNewFile(newFile: boolean): MergeRequestBasicDiscussionDto {
        this['new_file'] = newFile;
        return this;
    }
    public set newFile(newFile: boolean  | undefined) {
        this['new_file'] = newFile;
    }
    public get newFile(): boolean | undefined {
        return this['new_file'];
    }
    public withResolved(resolved: boolean): MergeRequestBasicDiscussionDto {
        this['resolved'] = resolved;
        return this;
    }
    public withArchived(archived: boolean): MergeRequestBasicDiscussionDto {
        this['archived'] = archived;
        return this;
    }
    public withReviewCategories(reviewCategories: string): MergeRequestBasicDiscussionDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewCategoriesCn(reviewCategoriesCn: string): MergeRequestBasicDiscussionDto {
        this['review_categories_cn'] = reviewCategoriesCn;
        return this;
    }
    public set reviewCategoriesCn(reviewCategoriesCn: string  | undefined) {
        this['review_categories_cn'] = reviewCategoriesCn;
    }
    public get reviewCategoriesCn(): string | undefined {
        return this['review_categories_cn'];
    }
    public withReviewCategoriesEn(reviewCategoriesEn: string): MergeRequestBasicDiscussionDto {
        this['review_categories_en'] = reviewCategoriesEn;
        return this;
    }
    public set reviewCategoriesEn(reviewCategoriesEn: string  | undefined) {
        this['review_categories_en'] = reviewCategoriesEn;
    }
    public get reviewCategoriesEn(): string | undefined {
        return this['review_categories_en'];
    }
    public withReviewModules(reviewModules: string): MergeRequestBasicDiscussionDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withSeverity(severity: MergeRequestBasicDiscussionDtoSeverityEnum | string): MergeRequestBasicDiscussionDto {
        this['severity'] = severity;
        return this;
    }
    public withSeverityCn(severityCn: string): MergeRequestBasicDiscussionDto {
        this['severity_cn'] = severityCn;
        return this;
    }
    public set severityCn(severityCn: string  | undefined) {
        this['severity_cn'] = severityCn;
    }
    public get severityCn(): string | undefined {
        return this['severity_cn'];
    }
    public withSeverityEn(severityEn: MergeRequestBasicDiscussionDtoSeverityEnEnum | string): MergeRequestBasicDiscussionDto {
        this['severity_en'] = severityEn;
        return this;
    }
    public set severityEn(severityEn: MergeRequestBasicDiscussionDtoSeverityEnEnum | string  | undefined) {
        this['severity_en'] = severityEn;
    }
    public get severityEn(): MergeRequestBasicDiscussionDtoSeverityEnEnum | string | undefined {
        return this['severity_en'];
    }
    public withAssignee(assignee: UserBasicDto): MergeRequestBasicDiscussionDto {
        this['assignee'] = assignee;
        return this;
    }
    public withProposer(proposer: UserBasicDto): MergeRequestBasicDiscussionDto {
        this['proposer'] = proposer;
        return this;
    }
    public withMergeRequestVersionParams(mergeRequestVersionParams: MergeRequestVersionParamsDto): MergeRequestBasicDiscussionDto {
        this['merge_request_version_params'] = mergeRequestVersionParams;
        return this;
    }
    public set mergeRequestVersionParams(mergeRequestVersionParams: MergeRequestVersionParamsDto  | undefined) {
        this['merge_request_version_params'] = mergeRequestVersionParams;
    }
    public get mergeRequestVersionParams(): MergeRequestVersionParamsDto | undefined {
        return this['merge_request_version_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MergeRequestBasicDiscussionDtoNoteableTypeEnum {
    MERGEREQUEST = 'MergeRequest',
    COMMIT = 'Commit'
}
/**
    * @export
    * @enum {string}
    */
export enum MergeRequestBasicDiscussionDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum MergeRequestBasicDiscussionDtoSeverityEnEnum {
    SUGGESTION = 'Suggestion',
    MINOR = 'Minor',
    MAJOR = 'Major',
    FATAL = 'Fatal'
}

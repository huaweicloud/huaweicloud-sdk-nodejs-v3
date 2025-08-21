import { RepositorySimpleDto } from './RepositorySimpleDto';


export class RepositoryImportRecordDto {
    public id?: number;
    public state?: RepositoryImportRecordDtoStateEnum | string;
    public repository?: RepositorySimpleDto;
    private 'origin_full_name'?: string;
    private 'source_url'?: string;
    private 'source_type'?: RepositoryImportRecordDtoSourceTypeEnum | string;
    private 'created_at'?: string;
    private 'finished_at'?: string;
    private 'repository_size'?: number;
    private 'error_message'?: string;
    private 'target_full_name'?: string;
    private 'target_project_id'?: string;
    public constructor() { 
    }
    public withId(id: number): RepositoryImportRecordDto {
        this['id'] = id;
        return this;
    }
    public withState(state: RepositoryImportRecordDtoStateEnum | string): RepositoryImportRecordDto {
        this['state'] = state;
        return this;
    }
    public withRepository(repository: RepositorySimpleDto): RepositoryImportRecordDto {
        this['repository'] = repository;
        return this;
    }
    public withOriginFullName(originFullName: string): RepositoryImportRecordDto {
        this['origin_full_name'] = originFullName;
        return this;
    }
    public set originFullName(originFullName: string  | undefined) {
        this['origin_full_name'] = originFullName;
    }
    public get originFullName(): string | undefined {
        return this['origin_full_name'];
    }
    public withSourceUrl(sourceUrl: string): RepositoryImportRecordDto {
        this['source_url'] = sourceUrl;
        return this;
    }
    public set sourceUrl(sourceUrl: string  | undefined) {
        this['source_url'] = sourceUrl;
    }
    public get sourceUrl(): string | undefined {
        return this['source_url'];
    }
    public withSourceType(sourceType: RepositoryImportRecordDtoSourceTypeEnum | string): RepositoryImportRecordDto {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: RepositoryImportRecordDtoSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): RepositoryImportRecordDtoSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withCreatedAt(createdAt: string): RepositoryImportRecordDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withFinishedAt(finishedAt: string): RepositoryImportRecordDto {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withRepositorySize(repositorySize: number): RepositoryImportRecordDto {
        this['repository_size'] = repositorySize;
        return this;
    }
    public set repositorySize(repositorySize: number  | undefined) {
        this['repository_size'] = repositorySize;
    }
    public get repositorySize(): number | undefined {
        return this['repository_size'];
    }
    public withErrorMessage(errorMessage: string): RepositoryImportRecordDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withTargetFullName(targetFullName: string): RepositoryImportRecordDto {
        this['target_full_name'] = targetFullName;
        return this;
    }
    public set targetFullName(targetFullName: string  | undefined) {
        this['target_full_name'] = targetFullName;
    }
    public get targetFullName(): string | undefined {
        return this['target_full_name'];
    }
    public withTargetProjectId(targetProjectId: string): RepositoryImportRecordDto {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryImportRecordDtoStateEnum {
    FINISHED = 'finished, 导入成功',
    FAIL = 'fail, 导入失败',
    IMPORTING = 'importing, 导入中'
}
/**
    * @export
    * @enum {string}
    */
export enum RepositoryImportRecordDtoSourceTypeEnum {
    GITEE = 'gitee',
    SELF_MANAGED_GITLAB = 'self_managed_gitlab',
    GITLAB = 'gitlab',
    GITHUB = 'github',
    GIT = 'git',
    SVN = 'svn',
    CODING = 'coding',
    BITBUCKET = 'bitbucket',
    GERRIT = 'gerrit',
    CODEUP = 'codeup'
}



export class ShowRepositoryByCloudIdeRequest {
    private 'X-Language'?: ShowRepositoryByCloudIdeRequestXLanguageEnum | string;
    private 'repository_id'?: string;
    private 'repository_ssh_url'?: string;
    private 'region_id'?: string;
    private 'space_prefix'?: string;
    private 'is_open_last'?: boolean;
    private 'is_free'?: boolean;
    public constructor(repositoryId?: string, repositorySshUrl?: string) { 
        this['repository_id'] = repositoryId;
        this['repository_ssh_url'] = repositorySshUrl;
    }
    public withXLanguage(xLanguage: ShowRepositoryByCloudIdeRequestXLanguageEnum | string): ShowRepositoryByCloudIdeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRepositoryByCloudIdeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowRepositoryByCloudIdeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withRepositoryId(repositoryId: string): ShowRepositoryByCloudIdeRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withRepositorySshUrl(repositorySshUrl: string): ShowRepositoryByCloudIdeRequest {
        this['repository_ssh_url'] = repositorySshUrl;
        return this;
    }
    public set repositorySshUrl(repositorySshUrl: string  | undefined) {
        this['repository_ssh_url'] = repositorySshUrl;
    }
    public get repositorySshUrl(): string | undefined {
        return this['repository_ssh_url'];
    }
    public withRegionId(regionId: string): ShowRepositoryByCloudIdeRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSpacePrefix(spacePrefix: string): ShowRepositoryByCloudIdeRequest {
        this['space_prefix'] = spacePrefix;
        return this;
    }
    public set spacePrefix(spacePrefix: string  | undefined) {
        this['space_prefix'] = spacePrefix;
    }
    public get spacePrefix(): string | undefined {
        return this['space_prefix'];
    }
    public withIsOpenLast(isOpenLast: boolean): ShowRepositoryByCloudIdeRequest {
        this['is_open_last'] = isOpenLast;
        return this;
    }
    public set isOpenLast(isOpenLast: boolean  | undefined) {
        this['is_open_last'] = isOpenLast;
    }
    public get isOpenLast(): boolean | undefined {
        return this['is_open_last'];
    }
    public withIsFree(isFree: boolean): ShowRepositoryByCloudIdeRequest {
        this['is_free'] = isFree;
        return this;
    }
    public set isFree(isFree: boolean  | undefined) {
        this['is_free'] = isFree;
    }
    public get isFree(): boolean | undefined {
        return this['is_free'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryByCloudIdeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

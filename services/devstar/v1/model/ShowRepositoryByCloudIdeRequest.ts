

export class ShowRepositoryByCloudIdeRequest {
    private 'X-Language'?: ShowRepositoryByCloudIdeRequestXLanguageEnum | undefined;
    private 'repository_id': string | undefined;
    private 'repository_ssh_url': string | undefined;
    private 'region_id'?: string | undefined;
    private 'space_prefix'?: string | undefined;
    private 'is_open_last'?: boolean | undefined;
    private 'is_free'?: boolean | undefined;
    public constructor(repositoryId?: any, repositorySshUrl?: any) { 
        this['repository_id'] = repositoryId;
        this['repository_ssh_url'] = repositorySshUrl;
    }
    public withXLanguage(xLanguage: ShowRepositoryByCloudIdeRequestXLanguageEnum): ShowRepositoryByCloudIdeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRepositoryByCloudIdeRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withRepositoryId(repositoryId: string): ShowRepositoryByCloudIdeRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId() {
        return this['repository_id'];
    }
    public withRepositorySshUrl(repositorySshUrl: string): ShowRepositoryByCloudIdeRequest {
        this['repository_ssh_url'] = repositorySshUrl;
        return this;
    }
    public set repositorySshUrl(repositorySshUrl: string | undefined) {
        this['repository_ssh_url'] = repositorySshUrl;
    }
    public get repositorySshUrl() {
        return this['repository_ssh_url'];
    }
    public withRegionId(regionId: string): ShowRepositoryByCloudIdeRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withSpacePrefix(spacePrefix: string): ShowRepositoryByCloudIdeRequest {
        this['space_prefix'] = spacePrefix;
        return this;
    }
    public set spacePrefix(spacePrefix: string | undefined) {
        this['space_prefix'] = spacePrefix;
    }
    public get spacePrefix() {
        return this['space_prefix'];
    }
    public withIsOpenLast(isOpenLast: boolean): ShowRepositoryByCloudIdeRequest {
        this['is_open_last'] = isOpenLast;
        return this;
    }
    public set isOpenLast(isOpenLast: boolean | undefined) {
        this['is_open_last'] = isOpenLast;
    }
    public get isOpenLast() {
        return this['is_open_last'];
    }
    public withIsFree(isFree: boolean): ShowRepositoryByCloudIdeRequest {
        this['is_free'] = isFree;
        return this;
    }
    public set isFree(isFree: boolean | undefined) {
        this['is_free'] = isFree;
    }
    public get isFree() {
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

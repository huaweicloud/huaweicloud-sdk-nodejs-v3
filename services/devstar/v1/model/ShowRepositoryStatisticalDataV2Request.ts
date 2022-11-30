

export class ShowRepositoryStatisticalDataV2Request {
    private 'X-Language'?: ShowRepositoryStatisticalDataV2RequestXLanguageEnum | undefined;
    private 'repository_id': string | undefined;
    public constructor(repositoryId?: any) { 
        this['repository_id'] = repositoryId;
    }
    public withXLanguage(xLanguage: ShowRepositoryStatisticalDataV2RequestXLanguageEnum): ShowRepositoryStatisticalDataV2Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRepositoryStatisticalDataV2RequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withRepositoryId(repositoryId: string): ShowRepositoryStatisticalDataV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId() {
        return this['repository_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryStatisticalDataV2RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

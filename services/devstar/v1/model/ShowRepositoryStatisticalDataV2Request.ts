

export class ShowRepositoryStatisticalDataV2Request {
    private 'X-Language'?: ShowRepositoryStatisticalDataV2RequestXLanguageEnum | string;
    private 'repository_id'?: string;
    public constructor(repositoryId?: string) { 
        this['repository_id'] = repositoryId;
    }
    public withXLanguage(xLanguage: ShowRepositoryStatisticalDataV2RequestXLanguageEnum | string): ShowRepositoryStatisticalDataV2Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRepositoryStatisticalDataV2RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowRepositoryStatisticalDataV2RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withRepositoryId(repositoryId: string): ShowRepositoryStatisticalDataV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
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



export class ShowBackupResourcePackageFlavorsRequest {
    private 'X-Language'?: ShowBackupResourcePackageFlavorsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowBackupResourcePackageFlavorsRequestXLanguageEnum | string): ShowBackupResourcePackageFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowBackupResourcePackageFlavorsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowBackupResourcePackageFlavorsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowBackupResourcePackageFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowBackupResourcePackageFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBackupResourcePackageFlavorsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

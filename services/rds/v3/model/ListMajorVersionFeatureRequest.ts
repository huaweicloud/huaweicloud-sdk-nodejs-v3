

export class ListMajorVersionFeatureRequest {
    private 'X-Language'?: ListMajorVersionFeatureRequestXLanguageEnum | string;
    public version?: string;
    public single?: boolean;
    public constructor(version?: string, single?: boolean) { 
        this['version'] = version;
        this['single'] = single;
    }
    public withXLanguage(xLanguage: ListMajorVersionFeatureRequestXLanguageEnum | string): ListMajorVersionFeatureRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListMajorVersionFeatureRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListMajorVersionFeatureRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withVersion(version: string): ListMajorVersionFeatureRequest {
        this['version'] = version;
        return this;
    }
    public withSingle(single: boolean): ListMajorVersionFeatureRequest {
        this['single'] = single;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMajorVersionFeatureRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

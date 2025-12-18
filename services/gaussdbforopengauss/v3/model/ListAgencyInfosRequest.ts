

export class ListAgencyInfosRequest {
    private 'X-Language'?: ListAgencyInfosRequestXLanguageEnum | string;
    private 'agency_name'?: string;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withXLanguage(xLanguage: ListAgencyInfosRequestXLanguageEnum | string): ListAgencyInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAgencyInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAgencyInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withAgencyName(agencyName: string): ListAgencyInfosRequest {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgencyInfosRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}



export class ListOffSiteInstancesRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListOffSiteInstancesRequestXLanguageEnum | string;
    public offset?: object;
    public limit?: object;
    public constructor() { 
    }
    public withContentType(contentType: string): ListOffSiteInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListOffSiteInstancesRequestXLanguageEnum | string): ListOffSiteInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListOffSiteInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListOffSiteInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: object): ListOffSiteInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: object): ListOffSiteInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListOffSiteInstancesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

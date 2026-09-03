import { CreateUploadUrlsReq } from './CreateUploadUrlsReq';


export class CreateUploadUrlsRequest {
    private 'X-Language'?: CreateUploadUrlsRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: CreateUploadUrlsReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateUploadUrlsRequestXLanguageEnum | string): CreateUploadUrlsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateUploadUrlsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateUploadUrlsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateUploadUrlsRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateUploadUrlsReq): CreateUploadUrlsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUploadUrlsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

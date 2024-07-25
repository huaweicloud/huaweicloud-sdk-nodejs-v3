import { PostPaidParam } from './PostPaidParam';


export class CreatePostPaidOrderRequest {
    private 'X-Language'?: CreatePostPaidOrderRequestXLanguageEnum | string;
    public body?: PostPaidParam;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: CreatePostPaidOrderRequestXLanguageEnum | string): CreatePostPaidOrderRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreatePostPaidOrderRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreatePostPaidOrderRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: PostPaidParam): CreatePostPaidOrderRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidOrderRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

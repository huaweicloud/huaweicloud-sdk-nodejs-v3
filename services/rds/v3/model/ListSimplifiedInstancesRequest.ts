import { SimplifiedInstancesRequest } from './SimplifiedInstancesRequest';


export class ListSimplifiedInstancesRequest {
    private 'X-Language'?: ListSimplifiedInstancesRequestXLanguageEnum | string;
    public body?: SimplifiedInstancesRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSimplifiedInstancesRequestXLanguageEnum | string): ListSimplifiedInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSimplifiedInstancesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSimplifiedInstancesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SimplifiedInstancesRequest): ListSimplifiedInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSimplifiedInstancesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

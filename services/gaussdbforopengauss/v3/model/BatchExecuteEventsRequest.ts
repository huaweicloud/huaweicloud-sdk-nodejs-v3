import { BatchExecuteEventsRequestBody } from './BatchExecuteEventsRequestBody';


export class BatchExecuteEventsRequest {
    private 'X-Language'?: BatchExecuteEventsRequestXLanguageEnum | string;
    public body?: BatchExecuteEventsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchExecuteEventsRequestXLanguageEnum | string): BatchExecuteEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchExecuteEventsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchExecuteEventsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchExecuteEventsRequestBody): BatchExecuteEventsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchExecuteEventsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

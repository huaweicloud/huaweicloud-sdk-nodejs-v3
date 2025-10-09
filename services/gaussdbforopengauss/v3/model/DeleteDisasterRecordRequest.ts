import { DeleteDisasterRecordRequestBody } from './DeleteDisasterRecordRequestBody';


export class DeleteDisasterRecordRequest {
    private 'X-Language'?: DeleteDisasterRecordRequestXLanguageEnum | string;
    public body?: DeleteDisasterRecordRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DeleteDisasterRecordRequestXLanguageEnum | string): DeleteDisasterRecordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteDisasterRecordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteDisasterRecordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteDisasterRecordRequestBody): DeleteDisasterRecordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDisasterRecordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

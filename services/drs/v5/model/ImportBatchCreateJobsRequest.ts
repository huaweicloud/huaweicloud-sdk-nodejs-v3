import { ImportBatchCreateJobsRequestBody } from './ImportBatchCreateJobsRequestBody';


export class ImportBatchCreateJobsRequest {
    private 'X-Language'?: ImportBatchCreateJobsRequestXLanguageEnum | string;
    public body?: ImportBatchCreateJobsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ImportBatchCreateJobsRequestXLanguageEnum | string): ImportBatchCreateJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ImportBatchCreateJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ImportBatchCreateJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ImportBatchCreateJobsRequestBody): ImportBatchCreateJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportBatchCreateJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

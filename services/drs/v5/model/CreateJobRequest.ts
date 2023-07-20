import { SingleCreateJobReq } from './SingleCreateJobReq';


export class CreateJobRequest {
    private 'X-Language'?: CreateJobRequestXLanguageEnum | string;
    public body?: SingleCreateJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateJobRequestXLanguageEnum | string): CreateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SingleCreateJobReq): CreateJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

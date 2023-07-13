import { SingleCreateJobReq } from './SingleCreateJobReq';


export class CreateJobRequest {
    private 'X-Language'?: CreateJobRequestXLanguageEnum | undefined;
    public body?: SingleCreateJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateJobRequestXLanguageEnum): CreateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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

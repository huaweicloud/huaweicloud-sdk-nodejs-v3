import { CheckJobNameReq } from './CheckJobNameReq';


export class ValidateJobNameRequest {
    private 'X-Language'?: ValidateJobNameRequestXLanguageEnum | string;
    public body?: CheckJobNameReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ValidateJobNameRequestXLanguageEnum | string): ValidateJobNameRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ValidateJobNameRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ValidateJobNameRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CheckJobNameReq): ValidateJobNameRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidateJobNameRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

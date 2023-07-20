import { CloneJobReq } from './CloneJobReq';


export class CopyJobRequest {
    private 'X-Language'?: CopyJobRequestXLanguageEnum | string;
    public body?: CloneJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CopyJobRequestXLanguageEnum | string): CopyJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CopyJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CopyJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CloneJobReq): CopyJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CopyJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

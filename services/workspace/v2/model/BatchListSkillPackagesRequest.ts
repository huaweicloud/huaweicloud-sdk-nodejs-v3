import { BatchListSkillPackagesReq } from './BatchListSkillPackagesReq';


export class BatchListSkillPackagesRequest {
    private 'X-Language'?: BatchListSkillPackagesRequestXLanguageEnum | string;
    public body?: BatchListSkillPackagesReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListSkillPackagesRequestXLanguageEnum | string): BatchListSkillPackagesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListSkillPackagesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchListSkillPackagesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchListSkillPackagesReq): BatchListSkillPackagesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListSkillPackagesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

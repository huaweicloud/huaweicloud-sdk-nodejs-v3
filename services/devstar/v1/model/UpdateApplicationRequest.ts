import { ApplicationModifyInfo } from './ApplicationModifyInfo';


export class UpdateApplicationRequest {
    private 'X-Language'?: UpdateApplicationRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    public body?: ApplicationModifyInfo;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: UpdateApplicationRequestXLanguageEnum): UpdateApplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateApplicationRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): UpdateApplicationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withBody(body: ApplicationModifyInfo): UpdateApplicationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateApplicationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

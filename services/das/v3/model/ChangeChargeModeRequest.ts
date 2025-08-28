import { ChangeChargeModeBody } from './ChangeChargeModeBody';


export class ChangeChargeModeRequest {
    private 'X-Language'?: ChangeChargeModeRequestXLanguageEnum | string;
    public body?: ChangeChargeModeBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ChangeChargeModeRequestXLanguageEnum | string): ChangeChargeModeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ChangeChargeModeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ChangeChargeModeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ChangeChargeModeBody): ChangeChargeModeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeChargeModeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

import { SetLockBlockingSwitchReq } from './SetLockBlockingSwitchReq';


export class SetLockBlockingSwitchRequest {
    private 'X-Language'?: SetLockBlockingSwitchRequestXLanguageEnum | string;
    public body?: SetLockBlockingSwitchReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: SetLockBlockingSwitchRequestXLanguageEnum | string): SetLockBlockingSwitchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetLockBlockingSwitchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetLockBlockingSwitchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetLockBlockingSwitchReq): SetLockBlockingSwitchRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetLockBlockingSwitchRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

import { CustomerCreateInstanceReq } from './CustomerCreateInstanceReq';


export class CreateInstanceIam5Request {
    private 'X-Language'?: CreateInstanceIam5RequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: CustomerCreateInstanceReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateInstanceIam5RequestXLanguageEnum | string): CreateInstanceIam5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateInstanceIam5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateInstanceIam5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateInstanceIam5Request {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CustomerCreateInstanceReq): CreateInstanceIam5Request {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceIam5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

import { InstanceRequest } from './InstanceRequest';


export class CreateInstanceRequest {
    private 'X-Language'?: CreateInstanceRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: InstanceRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateInstanceRequestXLanguageEnum | string): CreateInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateInstanceRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateInstanceRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateInstanceRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: InstanceRequest): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

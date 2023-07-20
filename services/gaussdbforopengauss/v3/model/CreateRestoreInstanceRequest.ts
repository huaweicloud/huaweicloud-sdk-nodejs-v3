import { OpengaussRestoreInstanceRequest } from './OpengaussRestoreInstanceRequest';


export class CreateRestoreInstanceRequest {
    private 'X-Language'?: CreateRestoreInstanceRequestXLanguageEnum | string;
    public body?: OpengaussRestoreInstanceRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateRestoreInstanceRequestXLanguageEnum | string): CreateRestoreInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateRestoreInstanceRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateRestoreInstanceRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OpengaussRestoreInstanceRequest): CreateRestoreInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRestoreInstanceRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

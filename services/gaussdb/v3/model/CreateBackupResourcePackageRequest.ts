import { CreateBackupResourcePackageRequestBody } from './CreateBackupResourcePackageRequestBody';


export class CreateBackupResourcePackageRequest {
    private 'X-Language'?: CreateBackupResourcePackageRequestXLanguageEnum | string;
    public body?: CreateBackupResourcePackageRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateBackupResourcePackageRequestXLanguageEnum | string): CreateBackupResourcePackageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateBackupResourcePackageRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateBackupResourcePackageRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateBackupResourcePackageRequestBody): CreateBackupResourcePackageRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateBackupResourcePackageRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

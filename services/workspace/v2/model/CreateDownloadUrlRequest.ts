import { CreateDownloadUrlReq } from './CreateDownloadUrlReq';


export class CreateDownloadUrlRequest {
    private 'X-Language'?: CreateDownloadUrlRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    private 'skill_id'?: string;
    private 'package_id'?: string;
    public body?: CreateDownloadUrlReq;
    public constructor(skillId?: string, packageId?: string) { 
        this['skill_id'] = skillId;
        this['package_id'] = packageId;
    }
    public withXLanguage(xLanguage: CreateDownloadUrlRequestXLanguageEnum | string): CreateDownloadUrlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateDownloadUrlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateDownloadUrlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateDownloadUrlRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withSkillId(skillId: string): CreateDownloadUrlRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withPackageId(packageId: string): CreateDownloadUrlRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withBody(body: CreateDownloadUrlReq): CreateDownloadUrlRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDownloadUrlRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

import { RemovePackageRegionReq } from './RemovePackageRegionReq';


export class RemoveSkillPackageRegionRequest {
    private 'X-Language'?: RemoveSkillPackageRegionRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    private 'package_id'?: string;
    public body?: RemovePackageRegionReq;
    public constructor(skillId?: string, packageId?: string) { 
        this['skill_id'] = skillId;
        this['package_id'] = packageId;
    }
    public withXLanguage(xLanguage: RemoveSkillPackageRegionRequestXLanguageEnum | string): RemoveSkillPackageRegionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RemoveSkillPackageRegionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): RemoveSkillPackageRegionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): RemoveSkillPackageRegionRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withPackageId(packageId: string): RemoveSkillPackageRegionRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withBody(body: RemovePackageRegionReq): RemoveSkillPackageRegionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemoveSkillPackageRegionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

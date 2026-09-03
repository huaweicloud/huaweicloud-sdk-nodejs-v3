import { ExpandSkillPackageRegionReq } from './ExpandSkillPackageRegionReq';


export class ExpandSkillPackageRegionRequest {
    private 'X-Language'?: ExpandSkillPackageRegionRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    private 'package_id'?: string;
    public body?: ExpandSkillPackageRegionReq;
    public constructor(skillId?: string, packageId?: string) { 
        this['skill_id'] = skillId;
        this['package_id'] = packageId;
    }
    public withXLanguage(xLanguage: ExpandSkillPackageRegionRequestXLanguageEnum | string): ExpandSkillPackageRegionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExpandSkillPackageRegionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExpandSkillPackageRegionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ExpandSkillPackageRegionRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withPackageId(packageId: string): ExpandSkillPackageRegionRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withBody(body: ExpandSkillPackageRegionReq): ExpandSkillPackageRegionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExpandSkillPackageRegionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

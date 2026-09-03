

export class ShowCommonSkillPackageRequest {
    private 'X-Language'?: ShowCommonSkillPackageRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    private 'package_id'?: string;
    public constructor(skillId?: string, packageId?: string) { 
        this['skill_id'] = skillId;
        this['package_id'] = packageId;
    }
    public withXLanguage(xLanguage: ShowCommonSkillPackageRequestXLanguageEnum | string): ShowCommonSkillPackageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCommonSkillPackageRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCommonSkillPackageRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ShowCommonSkillPackageRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withPackageId(packageId: string): ShowCommonSkillPackageRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCommonSkillPackageRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

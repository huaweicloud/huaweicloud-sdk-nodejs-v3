

export class ShowSkillPackageRequest {
    private 'X-Language'?: ShowSkillPackageRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    private 'package_id'?: string;
    public constructor(skillId?: string, packageId?: string) { 
        this['skill_id'] = skillId;
        this['package_id'] = packageId;
    }
    public withXLanguage(xLanguage: ShowSkillPackageRequestXLanguageEnum | string): ShowSkillPackageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSkillPackageRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSkillPackageRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ShowSkillPackageRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withPackageId(packageId: string): ShowSkillPackageRequest {
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
export enum ShowSkillPackageRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

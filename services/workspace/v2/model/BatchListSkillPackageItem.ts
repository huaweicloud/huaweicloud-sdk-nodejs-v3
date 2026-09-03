import { CurrentPackageInfo } from './CurrentPackageInfo';


export class BatchListSkillPackageItem {
    private 'skill_id'?: string;
    private 'current_package'?: CurrentPackageInfo;
    public constructor() { 
    }
    public withSkillId(skillId: string): BatchListSkillPackageItem {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withCurrentPackage(currentPackage: CurrentPackageInfo): BatchListSkillPackageItem {
        this['current_package'] = currentPackage;
        return this;
    }
    public set currentPackage(currentPackage: CurrentPackageInfo  | undefined) {
        this['current_package'] = currentPackage;
    }
    public get currentPackage(): CurrentPackageInfo | undefined {
        return this['current_package'];
    }
}
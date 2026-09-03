

export class BatchListSkillPackagesReq {
    private 'skill_ids'?: Array<string>;
    public constructor(skillIds?: Array<string>) { 
        this['skill_ids'] = skillIds;
    }
    public withSkillIds(skillIds: Array<string>): BatchListSkillPackagesReq {
        this['skill_ids'] = skillIds;
        return this;
    }
    public set skillIds(skillIds: Array<string>  | undefined) {
        this['skill_ids'] = skillIds;
    }
    public get skillIds(): Array<string> | undefined {
        return this['skill_ids'];
    }
}
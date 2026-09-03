

export class DeleteSkillBindingReq {
    private 'instance_ids'?: Array<string>;
    private 'skill_ids'?: Array<string>;
    public tags?: Array<string>;
    public constructor(instanceIds?: Array<string>, skillIds?: Array<string>) { 
        this['instance_ids'] = instanceIds;
        this['skill_ids'] = skillIds;
    }
    public withInstanceIds(instanceIds: Array<string>): DeleteSkillBindingReq {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSkillIds(skillIds: Array<string>): DeleteSkillBindingReq {
        this['skill_ids'] = skillIds;
        return this;
    }
    public set skillIds(skillIds: Array<string>  | undefined) {
        this['skill_ids'] = skillIds;
    }
    public get skillIds(): Array<string> | undefined {
        return this['skill_ids'];
    }
    public withTags(tags: Array<string>): DeleteSkillBindingReq {
        this['tags'] = tags;
        return this;
    }
}
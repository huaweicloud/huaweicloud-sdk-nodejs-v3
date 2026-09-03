

export class CreateSkillBindingReq {
    private 'instance_ids'?: Array<string>;
    private 'skill_ids'?: Array<string>;
    public versions?: Array<string>;
    public tags?: Array<string>;
    public constructor(instanceIds?: Array<string>, skillIds?: Array<string>) { 
        this['instance_ids'] = instanceIds;
        this['skill_ids'] = skillIds;
    }
    public withInstanceIds(instanceIds: Array<string>): CreateSkillBindingReq {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSkillIds(skillIds: Array<string>): CreateSkillBindingReq {
        this['skill_ids'] = skillIds;
        return this;
    }
    public set skillIds(skillIds: Array<string>  | undefined) {
        this['skill_ids'] = skillIds;
    }
    public get skillIds(): Array<string> | undefined {
        return this['skill_ids'];
    }
    public withVersions(versions: Array<string>): CreateSkillBindingReq {
        this['versions'] = versions;
        return this;
    }
    public withTags(tags: Array<string>): CreateSkillBindingReq {
        this['tags'] = tags;
        return this;
    }
}
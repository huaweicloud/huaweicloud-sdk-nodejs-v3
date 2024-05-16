

export class KnowledgeSkillInfo {
    private 'skill_id'?: string;
    public name?: string;
    public identify?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withSkillId(skillId: string): KnowledgeSkillInfo {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withName(name: string): KnowledgeSkillInfo {
        this['name'] = name;
        return this;
    }
    public withIdentify(identify: string): KnowledgeSkillInfo {
        this['identify'] = identify;
        return this;
    }
    public withCreateTime(createTime: string): KnowledgeSkillInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): KnowledgeSkillInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}
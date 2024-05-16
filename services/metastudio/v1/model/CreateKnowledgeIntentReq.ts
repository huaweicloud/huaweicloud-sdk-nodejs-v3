

export class CreateKnowledgeIntentReq {
    public name?: string;
    public answer?: string;
    private 'skill_id'?: string;
    public constructor(name?: string, answer?: string, skillId?: string) { 
        this['name'] = name;
        this['answer'] = answer;
        this['skill_id'] = skillId;
    }
    public withName(name: string): CreateKnowledgeIntentReq {
        this['name'] = name;
        return this;
    }
    public withAnswer(answer: string): CreateKnowledgeIntentReq {
        this['answer'] = answer;
        return this;
    }
    public withSkillId(skillId: string): CreateKnowledgeIntentReq {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
}
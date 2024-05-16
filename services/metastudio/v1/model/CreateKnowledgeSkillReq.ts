

export class CreateKnowledgeSkillReq {
    public name?: string;
    public identify?: string;
    public constructor(name?: string, identify?: string) { 
        this['name'] = name;
        this['identify'] = identify;
    }
    public withName(name: string): CreateKnowledgeSkillReq {
        this['name'] = name;
        return this;
    }
    public withIdentify(identify: string): CreateKnowledgeSkillReq {
        this['identify'] = identify;
        return this;
    }
}
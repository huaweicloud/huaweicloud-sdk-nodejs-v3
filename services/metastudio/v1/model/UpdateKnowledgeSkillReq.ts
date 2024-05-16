

export class UpdateKnowledgeSkillReq {
    public name?: string;
    public identify?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateKnowledgeSkillReq {
        this['name'] = name;
        return this;
    }
    public withIdentify(identify: string): UpdateKnowledgeSkillReq {
        this['identify'] = identify;
        return this;
    }
}
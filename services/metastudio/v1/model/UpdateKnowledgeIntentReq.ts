

export class UpdateKnowledgeIntentReq {
    public name?: string;
    public answer?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateKnowledgeIntentReq {
        this['name'] = name;
        return this;
    }
    public withAnswer(answer: string): UpdateKnowledgeIntentReq {
        this['answer'] = answer;
        return this;
    }
}
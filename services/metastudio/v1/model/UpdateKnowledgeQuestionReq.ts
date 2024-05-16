

export class UpdateKnowledgeQuestionReq {
    public question?: string;
    public constructor() { 
    }
    public withQuestion(question: string): UpdateKnowledgeQuestionReq {
        this['question'] = question;
        return this;
    }
}
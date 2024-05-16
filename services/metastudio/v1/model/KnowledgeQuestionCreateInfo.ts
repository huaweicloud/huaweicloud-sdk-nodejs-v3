

export class KnowledgeQuestionCreateInfo {
    public question?: string;
    public constructor(question?: string) { 
        this['question'] = question;
    }
    public withQuestion(question: string): KnowledgeQuestionCreateInfo {
        this['question'] = question;
        return this;
    }
}


export class KnowledgeQuestionUpdateInfo {
    private 'question_id'?: string;
    public question?: string;
    public constructor(questionId?: string, question?: string) { 
        this['question_id'] = questionId;
        this['question'] = question;
    }
    public withQuestionId(questionId: string): KnowledgeQuestionUpdateInfo {
        this['question_id'] = questionId;
        return this;
    }
    public set questionId(questionId: string  | undefined) {
        this['question_id'] = questionId;
    }
    public get questionId(): string | undefined {
        return this['question_id'];
    }
    public withQuestion(question: string): KnowledgeQuestionUpdateInfo {
        this['question'] = question;
        return this;
    }
}
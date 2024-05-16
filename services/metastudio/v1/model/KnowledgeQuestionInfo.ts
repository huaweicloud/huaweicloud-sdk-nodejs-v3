

export class KnowledgeQuestionInfo {
    private 'question_id'?: string;
    public question?: string;
    private 'intent_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(question?: string, intentId?: string) { 
        this['question'] = question;
        this['intent_id'] = intentId;
    }
    public withQuestionId(questionId: string): KnowledgeQuestionInfo {
        this['question_id'] = questionId;
        return this;
    }
    public set questionId(questionId: string  | undefined) {
        this['question_id'] = questionId;
    }
    public get questionId(): string | undefined {
        return this['question_id'];
    }
    public withQuestion(question: string): KnowledgeQuestionInfo {
        this['question'] = question;
        return this;
    }
    public withIntentId(intentId: string): KnowledgeQuestionInfo {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withCreateTime(createTime: string): KnowledgeQuestionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): KnowledgeQuestionInfo {
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
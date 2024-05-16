import { KnowledgeQuestionCreateInfo } from './KnowledgeQuestionCreateInfo';


export class CreateKnowledgeQuestionReq {
    public question?: string;
    private 'intent_id'?: string;
    public constructor(question?: string) { 
        this['question'] = question;
    }
    public withQuestion(question: string): CreateKnowledgeQuestionReq {
        this['question'] = question;
        return this;
    }
    public withIntentId(intentId: string): CreateKnowledgeQuestionReq {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
}
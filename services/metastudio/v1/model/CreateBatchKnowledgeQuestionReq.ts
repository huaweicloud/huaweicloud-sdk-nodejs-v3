import { KnowledgeQuestionCreateInfo } from './KnowledgeQuestionCreateInfo';


export class CreateBatchKnowledgeQuestionReq {
    private 'intent_id'?: string;
    private 'question_list'?: Array<KnowledgeQuestionCreateInfo>;
    public constructor(intentId?: string, questionList?: Array<KnowledgeQuestionCreateInfo>) { 
        this['intent_id'] = intentId;
        this['question_list'] = questionList;
    }
    public withIntentId(intentId: string): CreateBatchKnowledgeQuestionReq {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withQuestionList(questionList: Array<KnowledgeQuestionCreateInfo>): CreateBatchKnowledgeQuestionReq {
        this['question_list'] = questionList;
        return this;
    }
    public set questionList(questionList: Array<KnowledgeQuestionCreateInfo>  | undefined) {
        this['question_list'] = questionList;
    }
    public get questionList(): Array<KnowledgeQuestionCreateInfo> | undefined {
        return this['question_list'];
    }
}
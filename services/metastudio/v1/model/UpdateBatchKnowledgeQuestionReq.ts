import { KnowledgeQuestionUpdateInfo } from './KnowledgeQuestionUpdateInfo';


export class UpdateBatchKnowledgeQuestionReq {
    private 'question_list'?: Array<KnowledgeQuestionUpdateInfo>;
    public constructor(questionList?: Array<KnowledgeQuestionUpdateInfo>) { 
        this['question_list'] = questionList;
    }
    public withQuestionList(questionList: Array<KnowledgeQuestionUpdateInfo>): UpdateBatchKnowledgeQuestionReq {
        this['question_list'] = questionList;
        return this;
    }
    public set questionList(questionList: Array<KnowledgeQuestionUpdateInfo>  | undefined) {
        this['question_list'] = questionList;
    }
    public get questionList(): Array<KnowledgeQuestionUpdateInfo> | undefined {
        return this['question_list'];
    }
}
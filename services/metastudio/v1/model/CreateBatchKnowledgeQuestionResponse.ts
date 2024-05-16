import { KnowledgeQuestionInfo } from './KnowledgeQuestionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBatchKnowledgeQuestionResponse extends SdkResponse {
    private 'question_list'?: Array<KnowledgeQuestionInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withQuestionList(questionList: Array<KnowledgeQuestionInfo>): CreateBatchKnowledgeQuestionResponse {
        this['question_list'] = questionList;
        return this;
    }
    public set questionList(questionList: Array<KnowledgeQuestionInfo>  | undefined) {
        this['question_list'] = questionList;
    }
    public get questionList(): Array<KnowledgeQuestionInfo> | undefined {
        return this['question_list'];
    }
    public withXRequestId(xRequestId: string): CreateBatchKnowledgeQuestionResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
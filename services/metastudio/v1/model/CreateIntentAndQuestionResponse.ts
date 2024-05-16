import { CreateKnowledgeIntentRsp } from './CreateKnowledgeIntentRsp';
import { KnowledgeQuestionInfo } from './KnowledgeQuestionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIntentAndQuestionResponse extends SdkResponse {
    private 'intent_id'?: string;
    public identify?: string;
    private 'question_list'?: Array<KnowledgeQuestionInfo>;
    private 'X-Request-Id'?: string;
    public constructor(intentId?: string) { 
        super();
        this['intent_id'] = intentId;
    }
    public withIntentId(intentId: string): CreateIntentAndQuestionResponse {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withIdentify(identify: string): CreateIntentAndQuestionResponse {
        this['identify'] = identify;
        return this;
    }
    public withQuestionList(questionList: Array<KnowledgeQuestionInfo>): CreateIntentAndQuestionResponse {
        this['question_list'] = questionList;
        return this;
    }
    public set questionList(questionList: Array<KnowledgeQuestionInfo>  | undefined) {
        this['question_list'] = questionList;
    }
    public get questionList(): Array<KnowledgeQuestionInfo> | undefined {
        return this['question_list'];
    }
    public withXRequestId(xRequestId: string): CreateIntentAndQuestionResponse {
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
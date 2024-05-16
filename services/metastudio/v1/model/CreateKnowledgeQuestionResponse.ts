
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKnowledgeQuestionResponse extends SdkResponse {
    private 'question_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withQuestionId(questionId: string): CreateKnowledgeQuestionResponse {
        this['question_id'] = questionId;
        return this;
    }
    public set questionId(questionId: string  | undefined) {
        this['question_id'] = questionId;
    }
    public get questionId(): string | undefined {
        return this['question_id'];
    }
    public withXRequestId(xRequestId: string): CreateKnowledgeQuestionResponse {
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
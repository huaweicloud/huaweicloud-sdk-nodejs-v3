
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateQuestionAnswerResponse extends SdkResponse {
    private 'question_answer_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withQuestionAnswerId(questionAnswerId: string): CreateQuestionAnswerResponse {
        this['question_answer_id'] = questionAnswerId;
        return this;
    }
    public set questionAnswerId(questionAnswerId: string  | undefined) {
        this['question_answer_id'] = questionAnswerId;
    }
    public get questionAnswerId(): string | undefined {
        return this['question_answer_id'];
    }
    public withXRequestId(xRequestId: string): CreateQuestionAnswerResponse {
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
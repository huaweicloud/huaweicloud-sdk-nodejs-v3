
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuestionAnswerResponse extends SdkResponse {
    private 'question_answer_id'?: string;
    public question?: string;
    public answer?: string;
    private 'similar_questions'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withQuestionAnswerId(questionAnswerId: string): ShowQuestionAnswerResponse {
        this['question_answer_id'] = questionAnswerId;
        return this;
    }
    public set questionAnswerId(questionAnswerId: string  | undefined) {
        this['question_answer_id'] = questionAnswerId;
    }
    public get questionAnswerId(): string | undefined {
        return this['question_answer_id'];
    }
    public withQuestion(question: string): ShowQuestionAnswerResponse {
        this['question'] = question;
        return this;
    }
    public withAnswer(answer: string): ShowQuestionAnswerResponse {
        this['answer'] = answer;
        return this;
    }
    public withSimilarQuestions(similarQuestions: string): ShowQuestionAnswerResponse {
        this['similar_questions'] = similarQuestions;
        return this;
    }
    public set similarQuestions(similarQuestions: string  | undefined) {
        this['similar_questions'] = similarQuestions;
    }
    public get similarQuestions(): string | undefined {
        return this['similar_questions'];
    }
    public withCreateTime(createTime: string): ShowQuestionAnswerResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowQuestionAnswerResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowQuestionAnswerResponse {
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
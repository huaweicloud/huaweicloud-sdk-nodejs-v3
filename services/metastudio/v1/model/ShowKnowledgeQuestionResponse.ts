
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKnowledgeQuestionResponse extends SdkResponse {
    private 'question_id'?: string;
    public question?: string;
    private 'intent_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withQuestionId(questionId: string): ShowKnowledgeQuestionResponse {
        this['question_id'] = questionId;
        return this;
    }
    public set questionId(questionId: string  | undefined) {
        this['question_id'] = questionId;
    }
    public get questionId(): string | undefined {
        return this['question_id'];
    }
    public withQuestion(question: string): ShowKnowledgeQuestionResponse {
        this['question'] = question;
        return this;
    }
    public withIntentId(intentId: string): ShowKnowledgeQuestionResponse {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withCreateTime(createTime: string): ShowKnowledgeQuestionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowKnowledgeQuestionResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowKnowledgeQuestionResponse {
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
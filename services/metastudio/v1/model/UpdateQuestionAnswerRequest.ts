import { UpdateQuestionAnswerReq } from './UpdateQuestionAnswerReq';


export class UpdateQuestionAnswerRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'question_answer_id'?: string;
    public body?: UpdateQuestionAnswerReq;
    public constructor(questionAnswerId?: string) { 
        this['question_answer_id'] = questionAnswerId;
    }
    public withAuthorization(authorization: string): UpdateQuestionAnswerRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateQuestionAnswerRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateQuestionAnswerRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateQuestionAnswerRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withQuestionAnswerId(questionAnswerId: string): UpdateQuestionAnswerRequest {
        this['question_answer_id'] = questionAnswerId;
        return this;
    }
    public set questionAnswerId(questionAnswerId: string  | undefined) {
        this['question_answer_id'] = questionAnswerId;
    }
    public get questionAnswerId(): string | undefined {
        return this['question_answer_id'];
    }
    public withBody(body: UpdateQuestionAnswerReq): UpdateQuestionAnswerRequest {
        this['body'] = body;
        return this;
    }
}
import { UpdateKnowledgeQuestionReq } from './UpdateKnowledgeQuestionReq';


export class UpdateKnowledgeQuestionRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'question_id'?: string;
    public body?: UpdateKnowledgeQuestionReq;
    public constructor(questionId?: string) { 
        this['question_id'] = questionId;
    }
    public withAuthorization(authorization: string): UpdateKnowledgeQuestionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateKnowledgeQuestionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateKnowledgeQuestionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateKnowledgeQuestionRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withQuestionId(questionId: string): UpdateKnowledgeQuestionRequest {
        this['question_id'] = questionId;
        return this;
    }
    public set questionId(questionId: string  | undefined) {
        this['question_id'] = questionId;
    }
    public get questionId(): string | undefined {
        return this['question_id'];
    }
    public withBody(body: UpdateKnowledgeQuestionReq): UpdateKnowledgeQuestionRequest {
        this['body'] = body;
        return this;
    }
}
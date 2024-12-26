import { DeleteTtscVocabularyConfigsRequestBody } from './DeleteTtscVocabularyConfigsRequestBody';


export class DeleteTtscVocabularyConfigsRequest {
    private 'X-Request-Id'?: string;
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    public body?: DeleteTtscVocabularyConfigsRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): DeleteTtscVocabularyConfigsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAuthorization(authorization: string): DeleteTtscVocabularyConfigsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): DeleteTtscVocabularyConfigsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): DeleteTtscVocabularyConfigsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): DeleteTtscVocabularyConfigsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): DeleteTtscVocabularyConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): DeleteTtscVocabularyConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: DeleteTtscVocabularyConfigsRequestBody): DeleteTtscVocabularyConfigsRequest {
        this['body'] = body;
        return this;
    }
}
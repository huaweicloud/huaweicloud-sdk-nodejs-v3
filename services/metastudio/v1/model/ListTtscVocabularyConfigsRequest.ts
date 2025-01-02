

export class ListTtscVocabularyConfigsRequest {
    private 'X-Request-Id'?: string;
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public type?: string;
    public limit?: number;
    public offset?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'search_key'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withXRequestId(xRequestId: string): ListTtscVocabularyConfigsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAuthorization(authorization: string): ListTtscVocabularyConfigsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTtscVocabularyConfigsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListTtscVocabularyConfigsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListTtscVocabularyConfigsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withType(type: string): ListTtscVocabularyConfigsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListTtscVocabularyConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTtscVocabularyConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListTtscVocabularyConfigsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTtscVocabularyConfigsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSearchKey(searchKey: string): ListTtscVocabularyConfigsRequest {
        this['search_key'] = searchKey;
        return this;
    }
    public set searchKey(searchKey: string  | undefined) {
        this['search_key'] = searchKey;
    }
    public get searchKey(): string | undefined {
        return this['search_key'];
    }
}


export class ShowAsrVocabularyRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'asr_vocabulary_id'?: string;
    public constructor(asrVocabularyId?: string) { 
        this['asr_vocabulary_id'] = asrVocabularyId;
    }
    public withAuthorization(authorization: string): ShowAsrVocabularyRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowAsrVocabularyRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowAsrVocabularyRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowAsrVocabularyRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withAsrVocabularyId(asrVocabularyId: string): ShowAsrVocabularyRequest {
        this['asr_vocabulary_id'] = asrVocabularyId;
        return this;
    }
    public set asrVocabularyId(asrVocabularyId: string  | undefined) {
        this['asr_vocabulary_id'] = asrVocabularyId;
    }
    public get asrVocabularyId(): string | undefined {
        return this['asr_vocabulary_id'];
    }
}


export class ShowPacifyWordsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'pacify_words_id'?: string;
    public constructor(pacifyWordsId?: string) { 
        this['pacify_words_id'] = pacifyWordsId;
    }
    public withAuthorization(authorization: string): ShowPacifyWordsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowPacifyWordsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowPacifyWordsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowPacifyWordsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withPacifyWordsId(pacifyWordsId: string): ShowPacifyWordsRequest {
        this['pacify_words_id'] = pacifyWordsId;
        return this;
    }
    public set pacifyWordsId(pacifyWordsId: string  | undefined) {
        this['pacify_words_id'] = pacifyWordsId;
    }
    public get pacifyWordsId(): string | undefined {
        return this['pacify_words_id'];
    }
}
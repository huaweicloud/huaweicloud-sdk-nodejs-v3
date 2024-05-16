

export class ShowWelcomeSpeechRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'welcome_speech_id'?: string;
    public constructor(welcomeSpeechId?: string) { 
        this['welcome_speech_id'] = welcomeSpeechId;
    }
    public withAuthorization(authorization: string): ShowWelcomeSpeechRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowWelcomeSpeechRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowWelcomeSpeechRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ShowWelcomeSpeechRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withWelcomeSpeechId(welcomeSpeechId: string): ShowWelcomeSpeechRequest {
        this['welcome_speech_id'] = welcomeSpeechId;
        return this;
    }
    public set welcomeSpeechId(welcomeSpeechId: string  | undefined) {
        this['welcome_speech_id'] = welcomeSpeechId;
    }
    public get welcomeSpeechId(): string | undefined {
        return this['welcome_speech_id'];
    }
}


export class ShowVoiceTrainingQuotasRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ShowVoiceTrainingQuotasRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowVoiceTrainingQuotasRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withOffset(offset: number): ShowVoiceTrainingQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowVoiceTrainingQuotasRequest {
        this['limit'] = limit;
        return this;
    }
}
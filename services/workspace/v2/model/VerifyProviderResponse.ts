
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class VerifyProviderResponse extends SdkResponse {
    private 'provider_id'?: string;
    public success?: boolean;
    public message?: string;
    public constructor() { 
        super();
    }
    public withProviderId(providerId: string): VerifyProviderResponse {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withSuccess(success: boolean): VerifyProviderResponse {
        this['success'] = success;
        return this;
    }
    public withMessage(message: string): VerifyProviderResponse {
        this['message'] = message;
        return this;
    }
}
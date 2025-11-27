import { PrivateProviderIdPrimitiveTypeHolder } from './PrivateProviderIdPrimitiveTypeHolder';
import { PrivateProviderSourcePrimitiveTypeHolder } from './PrivateProviderSourcePrimitiveTypeHolder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePrivateProviderResponse extends SdkResponse {
    private 'provider_id'?: string;
    private 'provider_source'?: string;
    public constructor() { 
        super();
    }
    public withProviderId(providerId: string): CreatePrivateProviderResponse {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderSource(providerSource: string): CreatePrivateProviderResponse {
        this['provider_source'] = providerSource;
        return this;
    }
    public set providerSource(providerSource: string  | undefined) {
        this['provider_source'] = providerSource;
    }
    public get providerSource(): string | undefined {
        return this['provider_source'];
    }
}
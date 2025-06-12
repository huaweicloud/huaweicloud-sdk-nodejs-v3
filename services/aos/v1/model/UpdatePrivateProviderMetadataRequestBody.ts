import { PrivateProviderDescriptionPrimitiveTypeHolder } from './PrivateProviderDescriptionPrimitiveTypeHolder';
import { PrivateProviderIdPrimitiveTypeHolder } from './PrivateProviderIdPrimitiveTypeHolder';


export class UpdatePrivateProviderMetadataRequestBody {
    private 'provider_description'?: string;
    private 'provider_id'?: string;
    public constructor() { 
    }
    public withProviderDescription(providerDescription: string): UpdatePrivateProviderMetadataRequestBody {
        this['provider_description'] = providerDescription;
        return this;
    }
    public set providerDescription(providerDescription: string  | undefined) {
        this['provider_description'] = providerDescription;
    }
    public get providerDescription(): string | undefined {
        return this['provider_description'];
    }
    public withProviderId(providerId: string): UpdatePrivateProviderMetadataRequestBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
}
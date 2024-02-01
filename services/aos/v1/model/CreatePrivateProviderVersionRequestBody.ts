import { FunctionGraphUrnRequiredPrimitiveTypeHolder } from './FunctionGraphUrnRequiredPrimitiveTypeHolder';
import { PrivateProviderIdPrimitiveTypeHolder } from './PrivateProviderIdPrimitiveTypeHolder';
import { PrivateProviderVersionDescriptionPrimitiveTypeHolder } from './PrivateProviderVersionDescriptionPrimitiveTypeHolder';
import { PrivateProviderVersionRequiredPrimitiveTypeHolder } from './PrivateProviderVersionRequiredPrimitiveTypeHolder';


export class CreatePrivateProviderVersionRequestBody {
    private 'provider_id'?: string;
    private 'provider_version'?: string;
    private 'version_description'?: string;
    private 'function_graph_urn'?: string;
    public constructor(providerVersion?: string, functionGraphUrn?: string) { 
        this['provider_version'] = providerVersion;
        this['function_graph_urn'] = functionGraphUrn;
    }
    public withProviderId(providerId: string): CreatePrivateProviderVersionRequestBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderVersion(providerVersion: string): CreatePrivateProviderVersionRequestBody {
        this['provider_version'] = providerVersion;
        return this;
    }
    public set providerVersion(providerVersion: string  | undefined) {
        this['provider_version'] = providerVersion;
    }
    public get providerVersion(): string | undefined {
        return this['provider_version'];
    }
    public withVersionDescription(versionDescription: string): CreatePrivateProviderVersionRequestBody {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withFunctionGraphUrn(functionGraphUrn: string): CreatePrivateProviderVersionRequestBody {
        this['function_graph_urn'] = functionGraphUrn;
        return this;
    }
    public set functionGraphUrn(functionGraphUrn: string  | undefined) {
        this['function_graph_urn'] = functionGraphUrn;
    }
    public get functionGraphUrn(): string | undefined {
        return this['function_graph_urn'];
    }
}
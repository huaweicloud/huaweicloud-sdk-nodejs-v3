import { FunctionGraphUrnPrimitiveTypeHolder } from './FunctionGraphUrnPrimitiveTypeHolder';
import { PrivateProviderDescriptionPrimitiveTypeHolder } from './PrivateProviderDescriptionPrimitiveTypeHolder';
import { PrivateProviderNamePrimitiveTypeHolder } from './PrivateProviderNamePrimitiveTypeHolder';
import { PrivateProviderVersionDescriptionPrimitiveTypeHolder } from './PrivateProviderVersionDescriptionPrimitiveTypeHolder';
import { PrivateProviderVersionPrimitiveTypeHolder } from './PrivateProviderVersionPrimitiveTypeHolder';


export class CreatePrivateProviderRequestBody {
    private 'provider_name'?: string;
    private 'provider_description'?: string;
    private 'provider_version'?: string;
    private 'version_description'?: string;
    private 'function_graph_urn'?: string;
    public constructor(providerName?: string) { 
        this['provider_name'] = providerName;
    }
    public withProviderName(providerName: string): CreatePrivateProviderRequestBody {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderDescription(providerDescription: string): CreatePrivateProviderRequestBody {
        this['provider_description'] = providerDescription;
        return this;
    }
    public set providerDescription(providerDescription: string  | undefined) {
        this['provider_description'] = providerDescription;
    }
    public get providerDescription(): string | undefined {
        return this['provider_description'];
    }
    public withProviderVersion(providerVersion: string): CreatePrivateProviderRequestBody {
        this['provider_version'] = providerVersion;
        return this;
    }
    public set providerVersion(providerVersion: string  | undefined) {
        this['provider_version'] = providerVersion;
    }
    public get providerVersion(): string | undefined {
        return this['provider_version'];
    }
    public withVersionDescription(versionDescription: string): CreatePrivateProviderRequestBody {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withFunctionGraphUrn(functionGraphUrn: string): CreatePrivateProviderRequestBody {
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
import { PrivateProviderSourcePrimitiveTypeHolder } from './PrivateProviderSourcePrimitiveTypeHolder';
import { PrivateProviderVersionSummary } from './PrivateProviderVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateProviderVersionMetadataResponse extends SdkResponse {
    private 'provider_id'?: string;
    private 'provider_name'?: string;
    private 'provider_version'?: string;
    private 'version_description'?: string;
    private 'function_graph_urn'?: string;
    private 'create_time'?: string;
    private 'provider_source'?: string;
    public constructor(providerName?: string) { 
        super();
        this['provider_name'] = providerName;
    }
    public withProviderId(providerId: string): ShowPrivateProviderVersionMetadataResponse {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderName(providerName: string): ShowPrivateProviderVersionMetadataResponse {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderVersion(providerVersion: string): ShowPrivateProviderVersionMetadataResponse {
        this['provider_version'] = providerVersion;
        return this;
    }
    public set providerVersion(providerVersion: string  | undefined) {
        this['provider_version'] = providerVersion;
    }
    public get providerVersion(): string | undefined {
        return this['provider_version'];
    }
    public withVersionDescription(versionDescription: string): ShowPrivateProviderVersionMetadataResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withFunctionGraphUrn(functionGraphUrn: string): ShowPrivateProviderVersionMetadataResponse {
        this['function_graph_urn'] = functionGraphUrn;
        return this;
    }
    public set functionGraphUrn(functionGraphUrn: string  | undefined) {
        this['function_graph_urn'] = functionGraphUrn;
    }
    public get functionGraphUrn(): string | undefined {
        return this['function_graph_urn'];
    }
    public withCreateTime(createTime: string): ShowPrivateProviderVersionMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withProviderSource(providerSource: string): ShowPrivateProviderVersionMetadataResponse {
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
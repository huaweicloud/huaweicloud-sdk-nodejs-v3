import { PrivateProviderSummary } from './PrivateProviderSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateProviderMetadataResponse extends SdkResponse {
    private 'provider_id'?: string;
    private 'provider_name'?: string;
    private 'provider_description'?: string;
    private 'provider_source'?: string;
    private 'provider_agency_urn'?: string;
    private 'provider_agency_name'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(providerName?: string) { 
        super();
        this['provider_name'] = providerName;
    }
    public withProviderId(providerId: string): ShowPrivateProviderMetadataResponse {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderName(providerName: string): ShowPrivateProviderMetadataResponse {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderDescription(providerDescription: string): ShowPrivateProviderMetadataResponse {
        this['provider_description'] = providerDescription;
        return this;
    }
    public set providerDescription(providerDescription: string  | undefined) {
        this['provider_description'] = providerDescription;
    }
    public get providerDescription(): string | undefined {
        return this['provider_description'];
    }
    public withProviderSource(providerSource: string): ShowPrivateProviderMetadataResponse {
        this['provider_source'] = providerSource;
        return this;
    }
    public set providerSource(providerSource: string  | undefined) {
        this['provider_source'] = providerSource;
    }
    public get providerSource(): string | undefined {
        return this['provider_source'];
    }
    public withProviderAgencyUrn(providerAgencyUrn: string): ShowPrivateProviderMetadataResponse {
        this['provider_agency_urn'] = providerAgencyUrn;
        return this;
    }
    public set providerAgencyUrn(providerAgencyUrn: string  | undefined) {
        this['provider_agency_urn'] = providerAgencyUrn;
    }
    public get providerAgencyUrn(): string | undefined {
        return this['provider_agency_urn'];
    }
    public withProviderAgencyName(providerAgencyName: string): ShowPrivateProviderMetadataResponse {
        this['provider_agency_name'] = providerAgencyName;
        return this;
    }
    public set providerAgencyName(providerAgencyName: string  | undefined) {
        this['provider_agency_name'] = providerAgencyName;
    }
    public get providerAgencyName(): string | undefined {
        return this['provider_agency_name'];
    }
    public withCreateTime(createTime: string): ShowPrivateProviderMetadataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowPrivateProviderMetadataResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}
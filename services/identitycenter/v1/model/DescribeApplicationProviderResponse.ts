import { DisplayDataDto } from './DisplayDataDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeApplicationProviderResponse extends SdkResponse {
    private 'application_provider_urn'?: string;
    private 'display_data'?: DisplayDataDto;
    private 'federation_protocol'?: DescribeApplicationProviderResponseFederationProtocolEnum | string;
    private 'application_provider_id'?: string;
    public constructor() { 
        super();
    }
    public withApplicationProviderUrn(applicationProviderUrn: string): DescribeApplicationProviderResponse {
        this['application_provider_urn'] = applicationProviderUrn;
        return this;
    }
    public set applicationProviderUrn(applicationProviderUrn: string  | undefined) {
        this['application_provider_urn'] = applicationProviderUrn;
    }
    public get applicationProviderUrn(): string | undefined {
        return this['application_provider_urn'];
    }
    public withDisplayData(displayData: DisplayDataDto): DescribeApplicationProviderResponse {
        this['display_data'] = displayData;
        return this;
    }
    public set displayData(displayData: DisplayDataDto  | undefined) {
        this['display_data'] = displayData;
    }
    public get displayData(): DisplayDataDto | undefined {
        return this['display_data'];
    }
    public withFederationProtocol(federationProtocol: DescribeApplicationProviderResponseFederationProtocolEnum | string): DescribeApplicationProviderResponse {
        this['federation_protocol'] = federationProtocol;
        return this;
    }
    public set federationProtocol(federationProtocol: DescribeApplicationProviderResponseFederationProtocolEnum | string  | undefined) {
        this['federation_protocol'] = federationProtocol;
    }
    public get federationProtocol(): DescribeApplicationProviderResponseFederationProtocolEnum | string | undefined {
        return this['federation_protocol'];
    }
    public withApplicationProviderId(applicationProviderId: string): DescribeApplicationProviderResponse {
        this['application_provider_id'] = applicationProviderId;
        return this;
    }
    public set applicationProviderId(applicationProviderId: string  | undefined) {
        this['application_provider_id'] = applicationProviderId;
    }
    public get applicationProviderId(): string | undefined {
        return this['application_provider_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DescribeApplicationProviderResponseFederationProtocolEnum {
    SAML = 'SAML',
    OAUTH = 'OAUTH'
}

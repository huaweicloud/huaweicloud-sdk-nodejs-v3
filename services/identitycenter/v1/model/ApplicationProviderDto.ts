import { DisplayDataDto } from './DisplayDataDto';


export class ApplicationProviderDto {
    private 'application_provider_urn'?: string;
    private 'display_data'?: DisplayDataDto;
    private 'federation_protocol'?: ApplicationProviderDtoFederationProtocolEnum | string;
    private 'application_provider_id'?: string;
    public constructor(applicationProviderUrn?: string, applicationProviderId?: string) { 
        this['application_provider_urn'] = applicationProviderUrn;
        this['application_provider_id'] = applicationProviderId;
    }
    public withApplicationProviderUrn(applicationProviderUrn: string): ApplicationProviderDto {
        this['application_provider_urn'] = applicationProviderUrn;
        return this;
    }
    public set applicationProviderUrn(applicationProviderUrn: string  | undefined) {
        this['application_provider_urn'] = applicationProviderUrn;
    }
    public get applicationProviderUrn(): string | undefined {
        return this['application_provider_urn'];
    }
    public withDisplayData(displayData: DisplayDataDto): ApplicationProviderDto {
        this['display_data'] = displayData;
        return this;
    }
    public set displayData(displayData: DisplayDataDto  | undefined) {
        this['display_data'] = displayData;
    }
    public get displayData(): DisplayDataDto | undefined {
        return this['display_data'];
    }
    public withFederationProtocol(federationProtocol: ApplicationProviderDtoFederationProtocolEnum | string): ApplicationProviderDto {
        this['federation_protocol'] = federationProtocol;
        return this;
    }
    public set federationProtocol(federationProtocol: ApplicationProviderDtoFederationProtocolEnum | string  | undefined) {
        this['federation_protocol'] = federationProtocol;
    }
    public get federationProtocol(): ApplicationProviderDtoFederationProtocolEnum | string | undefined {
        return this['federation_protocol'];
    }
    public withApplicationProviderId(applicationProviderId: string): ApplicationProviderDto {
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
export enum ApplicationProviderDtoFederationProtocolEnum {
    SAML = 'SAML',
    OAUTH = 'OAUTH'
}

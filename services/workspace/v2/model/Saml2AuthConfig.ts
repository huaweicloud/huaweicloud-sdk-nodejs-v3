import { IdpMetadataInfo } from './IdpMetadataInfo';


export class Saml2AuthConfig {
    private 'identity_provider'?: string;
    private 'access_server_address'?: string;
    private 'unique_user_identifier'?: string;
    private 'idp_metadata_info'?: IdpMetadataInfo;
    public constructor() { 
    }
    public withIdentityProvider(identityProvider: string): Saml2AuthConfig {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: string  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): string | undefined {
        return this['identity_provider'];
    }
    public withAccessServerAddress(accessServerAddress: string): Saml2AuthConfig {
        this['access_server_address'] = accessServerAddress;
        return this;
    }
    public set accessServerAddress(accessServerAddress: string  | undefined) {
        this['access_server_address'] = accessServerAddress;
    }
    public get accessServerAddress(): string | undefined {
        return this['access_server_address'];
    }
    public withUniqueUserIdentifier(uniqueUserIdentifier: string): Saml2AuthConfig {
        this['unique_user_identifier'] = uniqueUserIdentifier;
        return this;
    }
    public set uniqueUserIdentifier(uniqueUserIdentifier: string  | undefined) {
        this['unique_user_identifier'] = uniqueUserIdentifier;
    }
    public get uniqueUserIdentifier(): string | undefined {
        return this['unique_user_identifier'];
    }
    public withIdpMetadataInfo(idpMetadataInfo: IdpMetadataInfo): Saml2AuthConfig {
        this['idp_metadata_info'] = idpMetadataInfo;
        return this;
    }
    public set idpMetadataInfo(idpMetadataInfo: IdpMetadataInfo  | undefined) {
        this['idp_metadata_info'] = idpMetadataInfo;
    }
    public get idpMetadataInfo(): IdpMetadataInfo | undefined {
        return this['idp_metadata_info'];
    }
}
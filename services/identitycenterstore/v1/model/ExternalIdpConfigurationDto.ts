import { IdpCertificateBody } from './IdpCertificateBody';
import { IdpSAMLConfig } from './IdpSAMLConfig';


export class ExternalIdpConfigurationDto {
    private 'idp_certificate_ids'?: Array<IdpCertificateBody>;
    private 'idp_id'?: string;
    private 'idp_saml_config'?: IdpSAMLConfig;
    private 'is_enabled'?: boolean;
    public constructor(idpCertificateIds?: Array<IdpCertificateBody>, idpId?: string, idpSamlConfig?: IdpSAMLConfig, isEnabled?: boolean) { 
        this['idp_certificate_ids'] = idpCertificateIds;
        this['idp_id'] = idpId;
        this['idp_saml_config'] = idpSamlConfig;
        this['is_enabled'] = isEnabled;
    }
    public withIdpCertificateIds(idpCertificateIds: Array<IdpCertificateBody>): ExternalIdpConfigurationDto {
        this['idp_certificate_ids'] = idpCertificateIds;
        return this;
    }
    public set idpCertificateIds(idpCertificateIds: Array<IdpCertificateBody>  | undefined) {
        this['idp_certificate_ids'] = idpCertificateIds;
    }
    public get idpCertificateIds(): Array<IdpCertificateBody> | undefined {
        return this['idp_certificate_ids'];
    }
    public withIdpId(idpId: string): ExternalIdpConfigurationDto {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withIdpSamlConfig(idpSamlConfig: IdpSAMLConfig): ExternalIdpConfigurationDto {
        this['idp_saml_config'] = idpSamlConfig;
        return this;
    }
    public set idpSamlConfig(idpSamlConfig: IdpSAMLConfig  | undefined) {
        this['idp_saml_config'] = idpSamlConfig;
    }
    public get idpSamlConfig(): IdpSAMLConfig | undefined {
        return this['idp_saml_config'];
    }
    public withIsEnabled(isEnabled: boolean): ExternalIdpConfigurationDto {
        this['is_enabled'] = isEnabled;
        return this;
    }
    public set isEnabled(isEnabled: boolean  | undefined) {
        this['is_enabled'] = isEnabled;
    }
    public get isEnabled(): boolean | undefined {
        return this['is_enabled'];
    }
}
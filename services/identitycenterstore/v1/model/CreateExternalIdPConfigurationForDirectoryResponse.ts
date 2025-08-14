import { SPSAMLConfig } from './SPSAMLConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExternalIdPConfigurationForDirectoryResponse extends SdkResponse {
    private 'hws_sp_saml_config'?: SPSAMLConfig;
    private 'idp_certificate_id'?: string;
    private 'idp_certificate_ids'?: Array<string>;
    private 'idp_id'?: string;
    public constructor() { 
        super();
    }
    public withHwsSpSamlConfig(hwsSpSamlConfig: SPSAMLConfig): CreateExternalIdPConfigurationForDirectoryResponse {
        this['hws_sp_saml_config'] = hwsSpSamlConfig;
        return this;
    }
    public set hwsSpSamlConfig(hwsSpSamlConfig: SPSAMLConfig  | undefined) {
        this['hws_sp_saml_config'] = hwsSpSamlConfig;
    }
    public get hwsSpSamlConfig(): SPSAMLConfig | undefined {
        return this['hws_sp_saml_config'];
    }
    public withIdpCertificateId(idpCertificateId: string): CreateExternalIdPConfigurationForDirectoryResponse {
        this['idp_certificate_id'] = idpCertificateId;
        return this;
    }
    public set idpCertificateId(idpCertificateId: string  | undefined) {
        this['idp_certificate_id'] = idpCertificateId;
    }
    public get idpCertificateId(): string | undefined {
        return this['idp_certificate_id'];
    }
    public withIdpCertificateIds(idpCertificateIds: Array<string>): CreateExternalIdPConfigurationForDirectoryResponse {
        this['idp_certificate_ids'] = idpCertificateIds;
        return this;
    }
    public set idpCertificateIds(idpCertificateIds: Array<string>  | undefined) {
        this['idp_certificate_ids'] = idpCertificateIds;
    }
    public get idpCertificateIds(): Array<string> | undefined {
        return this['idp_certificate_ids'];
    }
    public withIdpId(idpId: string): CreateExternalIdPConfigurationForDirectoryResponse {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
}


export class CreateIDPReqBody {
    private 'idp_saml_metadata'?: string;
    private 'idp_certificate'?: string;
    private 'idp_saml_config'?: object;
    public constructor() { 
    }
    public withIdpSamlMetadata(idpSamlMetadata: string): CreateIDPReqBody {
        this['idp_saml_metadata'] = idpSamlMetadata;
        return this;
    }
    public set idpSamlMetadata(idpSamlMetadata: string  | undefined) {
        this['idp_saml_metadata'] = idpSamlMetadata;
    }
    public get idpSamlMetadata(): string | undefined {
        return this['idp_saml_metadata'];
    }
    public withIdpCertificate(idpCertificate: string): CreateIDPReqBody {
        this['idp_certificate'] = idpCertificate;
        return this;
    }
    public set idpCertificate(idpCertificate: string  | undefined) {
        this['idp_certificate'] = idpCertificate;
    }
    public get idpCertificate(): string | undefined {
        return this['idp_certificate'];
    }
    public withIdpSamlConfig(idpSamlConfig: object): CreateIDPReqBody {
        this['idp_saml_config'] = idpSamlConfig;
        return this;
    }
    public set idpSamlConfig(idpSamlConfig: object  | undefined) {
        this['idp_saml_config'] = idpSamlConfig;
    }
    public get idpSamlConfig(): object | undefined {
        return this['idp_saml_config'];
    }
}
import { SPOIDCConfig } from './SPOIDCConfig';
import { SPSAMLConfig } from './SPSAMLConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetSpConfigurationForDirectoryResponse extends SdkResponse {
    private 'sp_oidc_config'?: SPOIDCConfig;
    private 'sp_saml_config'?: SPSAMLConfig;
    public constructor() { 
        super();
    }
    public withSpOidcConfig(spOidcConfig: SPOIDCConfig): GetSpConfigurationForDirectoryResponse {
        this['sp_oidc_config'] = spOidcConfig;
        return this;
    }
    public set spOidcConfig(spOidcConfig: SPOIDCConfig  | undefined) {
        this['sp_oidc_config'] = spOidcConfig;
    }
    public get spOidcConfig(): SPOIDCConfig | undefined {
        return this['sp_oidc_config'];
    }
    public withSpSamlConfig(spSamlConfig: SPSAMLConfig): GetSpConfigurationForDirectoryResponse {
        this['sp_saml_config'] = spSamlConfig;
        return this;
    }
    public set spSamlConfig(spSamlConfig: SPSAMLConfig  | undefined) {
        this['sp_saml_config'] = spSamlConfig;
    }
    public get spSamlConfig(): SPSAMLConfig | undefined {
        return this['sp_saml_config'];
    }
}
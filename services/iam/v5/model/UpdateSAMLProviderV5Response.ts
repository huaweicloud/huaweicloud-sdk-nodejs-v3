import { InlineResponse201SamlProvider } from './InlineResponse201SamlProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSAMLProviderV5Response extends SdkResponse {
    private 'saml_provider'?: InlineResponse201SamlProvider;
    public constructor() { 
        super();
    }
    public withSamlProvider(samlProvider: InlineResponse201SamlProvider): UpdateSAMLProviderV5Response {
        this['saml_provider'] = samlProvider;
        return this;
    }
    public set samlProvider(samlProvider: InlineResponse201SamlProvider  | undefined) {
        this['saml_provider'] = samlProvider;
    }
    public get samlProvider(): InlineResponse201SamlProvider | undefined {
        return this['saml_provider'];
    }
}
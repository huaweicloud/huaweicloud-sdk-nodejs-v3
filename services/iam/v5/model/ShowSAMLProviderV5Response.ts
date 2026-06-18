import { InlineResponse2001SamlProvider } from './InlineResponse2001SamlProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSAMLProviderV5Response extends SdkResponse {
    private 'saml_provider'?: InlineResponse2001SamlProvider;
    public constructor() { 
        super();
    }
    public withSamlProvider(samlProvider: InlineResponse2001SamlProvider): ShowSAMLProviderV5Response {
        this['saml_provider'] = samlProvider;
        return this;
    }
    public set samlProvider(samlProvider: InlineResponse2001SamlProvider  | undefined) {
        this['saml_provider'] = samlProvider;
    }
    public get samlProvider(): InlineResponse2001SamlProvider | undefined {
        return this['saml_provider'];
    }
}
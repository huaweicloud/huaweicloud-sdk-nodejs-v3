import { InlineResponse2003OidcProvider } from './InlineResponse2003OidcProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOIDCProviderV5Response extends SdkResponse {
    private 'oidc_provider'?: InlineResponse2003OidcProvider;
    public constructor() { 
        super();
    }
    public withOidcProvider(oidcProvider: InlineResponse2003OidcProvider): ShowOIDCProviderV5Response {
        this['oidc_provider'] = oidcProvider;
        return this;
    }
    public set oidcProvider(oidcProvider: InlineResponse2003OidcProvider  | undefined) {
        this['oidc_provider'] = oidcProvider;
    }
    public get oidcProvider(): InlineResponse2003OidcProvider | undefined {
        return this['oidc_provider'];
    }
}
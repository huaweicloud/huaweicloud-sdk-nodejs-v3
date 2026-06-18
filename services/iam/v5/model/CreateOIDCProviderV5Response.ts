import { InlineResponse2011OidcProvider } from './InlineResponse2011OidcProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOIDCProviderV5Response extends SdkResponse {
    private 'oidc_provider'?: InlineResponse2011OidcProvider;
    public constructor() { 
        super();
    }
    public withOidcProvider(oidcProvider: InlineResponse2011OidcProvider): CreateOIDCProviderV5Response {
        this['oidc_provider'] = oidcProvider;
        return this;
    }
    public set oidcProvider(oidcProvider: InlineResponse2011OidcProvider  | undefined) {
        this['oidc_provider'] = oidcProvider;
    }
    public get oidcProvider(): InlineResponse2011OidcProvider | undefined {
        return this['oidc_provider'];
    }
}
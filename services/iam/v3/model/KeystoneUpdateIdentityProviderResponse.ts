import { IdentityprovidersResult } from './IdentityprovidersResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateIdentityProviderResponse extends SdkResponse {
    private 'identity_provider'?: IdentityprovidersResult;
    public constructor() { 
        super();
    }
    public withIdentityProvider(identityProvider: IdentityprovidersResult): KeystoneUpdateIdentityProviderResponse {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: IdentityprovidersResult  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): IdentityprovidersResult | undefined {
        return this['identity_provider'];
    }
}
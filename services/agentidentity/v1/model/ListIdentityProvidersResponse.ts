import { IdentityProviderListSummary } from './IdentityProviderListSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIdentityProvidersResponse extends SdkResponse {
    private 'identity_providers'?: Array<IdentityProviderListSummary>;
    public constructor() { 
        super();
    }
    public withIdentityProviders(identityProviders: Array<IdentityProviderListSummary>): ListIdentityProvidersResponse {
        this['identity_providers'] = identityProviders;
        return this;
    }
    public set identityProviders(identityProviders: Array<IdentityProviderListSummary>  | undefined) {
        this['identity_providers'] = identityProviders;
    }
    public get identityProviders(): Array<IdentityProviderListSummary> | undefined {
        return this['identity_providers'];
    }
}
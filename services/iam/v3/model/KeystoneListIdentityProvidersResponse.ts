import { IdentityprovidersResult } from './IdentityprovidersResult';
import { Links } from './Links';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListIdentityProvidersResponse extends SdkResponse {
    private 'identity_providers'?: Array<IdentityprovidersResult>;
    public links?: Links;
    public constructor() { 
        super();
    }
    public withIdentityProviders(identityProviders: Array<IdentityprovidersResult>): KeystoneListIdentityProvidersResponse {
        this['identity_providers'] = identityProviders;
        return this;
    }
    public set identityProviders(identityProviders: Array<IdentityprovidersResult>  | undefined) {
        this['identity_providers'] = identityProviders;
    }
    public get identityProviders(): Array<IdentityprovidersResult> | undefined {
        return this['identity_providers'];
    }
    public withLinks(links: Links): KeystoneListIdentityProvidersResponse {
        this['links'] = links;
        return this;
    }
}
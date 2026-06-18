import { InlineResponse2002OidcProviders } from './InlineResponse2002OidcProviders';
import { InlineResponse200PageInfo } from './InlineResponse200PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOIDCProvidersV5Response extends SdkResponse {
    private 'oidc_providers'?: Array<InlineResponse2002OidcProviders>;
    private 'page_info'?: InlineResponse200PageInfo;
    public constructor() { 
        super();
    }
    public withOidcProviders(oidcProviders: Array<InlineResponse2002OidcProviders>): ListOIDCProvidersV5Response {
        this['oidc_providers'] = oidcProviders;
        return this;
    }
    public set oidcProviders(oidcProviders: Array<InlineResponse2002OidcProviders>  | undefined) {
        this['oidc_providers'] = oidcProviders;
    }
    public get oidcProviders(): Array<InlineResponse2002OidcProviders> | undefined {
        return this['oidc_providers'];
    }
    public withPageInfo(pageInfo: InlineResponse200PageInfo): ListOIDCProvidersV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: InlineResponse200PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): InlineResponse200PageInfo | undefined {
        return this['page_info'];
    }
}
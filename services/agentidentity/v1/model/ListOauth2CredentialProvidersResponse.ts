import { Oauth2CredentialProviderSummary } from './Oauth2CredentialProviderSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOauth2CredentialProvidersResponse extends SdkResponse {
    private 'credential_providers'?: Array<Oauth2CredentialProviderSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withCredentialProviders(credentialProviders: Array<Oauth2CredentialProviderSummary>): ListOauth2CredentialProvidersResponse {
        this['credential_providers'] = credentialProviders;
        return this;
    }
    public set credentialProviders(credentialProviders: Array<Oauth2CredentialProviderSummary>  | undefined) {
        this['credential_providers'] = credentialProviders;
    }
    public get credentialProviders(): Array<Oauth2CredentialProviderSummary> | undefined {
        return this['credential_providers'];
    }
    public withPageInfo(pageInfo: PageInfo): ListOauth2CredentialProvidersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}
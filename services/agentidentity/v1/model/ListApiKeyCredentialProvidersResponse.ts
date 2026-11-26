import { ApiKeyCredentialProviderSummary } from './ApiKeyCredentialProviderSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiKeyCredentialProvidersResponse extends SdkResponse {
    private 'credential_providers'?: Array<ApiKeyCredentialProviderSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withCredentialProviders(credentialProviders: Array<ApiKeyCredentialProviderSummary>): ListApiKeyCredentialProvidersResponse {
        this['credential_providers'] = credentialProviders;
        return this;
    }
    public set credentialProviders(credentialProviders: Array<ApiKeyCredentialProviderSummary>  | undefined) {
        this['credential_providers'] = credentialProviders;
    }
    public get credentialProviders(): Array<ApiKeyCredentialProviderSummary> | undefined {
        return this['credential_providers'];
    }
    public withPageInfo(pageInfo: PageInfo): ListApiKeyCredentialProvidersResponse {
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
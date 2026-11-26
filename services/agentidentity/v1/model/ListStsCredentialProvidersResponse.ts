import { PageInfo } from './PageInfo';
import { StsCredentialProviderSummary } from './StsCredentialProviderSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStsCredentialProvidersResponse extends SdkResponse {
    private 'credential_providers'?: Array<StsCredentialProviderSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withCredentialProviders(credentialProviders: Array<StsCredentialProviderSummary>): ListStsCredentialProvidersResponse {
        this['credential_providers'] = credentialProviders;
        return this;
    }
    public set credentialProviders(credentialProviders: Array<StsCredentialProviderSummary>  | undefined) {
        this['credential_providers'] = credentialProviders;
    }
    public get credentialProviders(): Array<StsCredentialProviderSummary> | undefined {
        return this['credential_providers'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStsCredentialProvidersResponse {
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
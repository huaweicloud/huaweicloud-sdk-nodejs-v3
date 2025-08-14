import { ApplicationProviderDto } from './ApplicationProviderDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationProvidersResponse extends SdkResponse {
    private 'application_providers'?: Array<ApplicationProviderDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplicationProviders(applicationProviders: Array<ApplicationProviderDto>): ListApplicationProvidersResponse {
        this['application_providers'] = applicationProviders;
        return this;
    }
    public set applicationProviders(applicationProviders: Array<ApplicationProviderDto>  | undefined) {
        this['application_providers'] = applicationProviders;
    }
    public get applicationProviders(): Array<ApplicationProviderDto> | undefined {
        return this['application_providers'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListApplicationProvidersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}
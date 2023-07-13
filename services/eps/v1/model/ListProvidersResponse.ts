import { ProviderResponseBody } from './ProviderResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProvidersResponse extends SdkResponse {
    public providers?: Array<ProviderResponseBody>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withProviders(providers: Array<ProviderResponseBody>): ListProvidersResponse {
        this['providers'] = providers;
        return this;
    }
    public withTotalCount(totalCount: number): ListProvidersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}
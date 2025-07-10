import { ListShareCacheGroupsConfig } from './ListShareCacheGroupsConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareCacheGroupsResponse extends SdkResponse {
    public total?: number;
    private 'share_cache_groups'?: Array<ListShareCacheGroupsConfig>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListShareCacheGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withShareCacheGroups(shareCacheGroups: Array<ListShareCacheGroupsConfig>): ListShareCacheGroupsResponse {
        this['share_cache_groups'] = shareCacheGroups;
        return this;
    }
    public set shareCacheGroups(shareCacheGroups: Array<ListShareCacheGroupsConfig>  | undefined) {
        this['share_cache_groups'] = shareCacheGroups;
    }
    public get shareCacheGroups(): Array<ListShareCacheGroupsConfig> | undefined {
        return this['share_cache_groups'];
    }
}
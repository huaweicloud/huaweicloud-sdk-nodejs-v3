import { PageInfo } from './PageInfo';
import { StoragePoolV2 } from './StoragePoolV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStoragePoolsResponse extends SdkResponse {
    private 'storage_pools'?: Array<StoragePoolV2>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStoragePools(storagePools: Array<StoragePoolV2>): ListStoragePoolsResponse {
        this['storage_pools'] = storagePools;
        return this;
    }
    public set storagePools(storagePools: Array<StoragePoolV2>  | undefined) {
        this['storage_pools'] = storagePools;
    }
    public get storagePools(): Array<StoragePoolV2> | undefined {
        return this['storage_pools'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStoragePoolsResponse {
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
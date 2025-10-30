import { PageInfo } from './PageInfo';
import { StorageTypeOption } from './StorageTypeOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageTypesResponse extends SdkResponse {
    private 'storage_types'?: Array<StorageTypeOption>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStorageTypes(storageTypes: Array<StorageTypeOption>): ListStorageTypesResponse {
        this['storage_types'] = storageTypes;
        return this;
    }
    public set storageTypes(storageTypes: Array<StorageTypeOption>  | undefined) {
        this['storage_types'] = storageTypes;
    }
    public get storageTypes(): Array<StorageTypeOption> | undefined {
        return this['storage_types'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStorageTypesResponse {
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
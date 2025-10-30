import { PageInfo } from './PageInfo';
import { StorageGearV2 } from './StorageGearV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageGearsResponse extends SdkResponse {
    private 'storage_gears'?: Array<StorageGearV2>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStorageGears(storageGears: Array<StorageGearV2>): ListStorageGearsResponse {
        this['storage_gears'] = storageGears;
        return this;
    }
    public set storageGears(storageGears: Array<StorageGearV2>  | undefined) {
        this['storage_gears'] = storageGears;
    }
    public get storageGears(): Array<StorageGearV2> | undefined {
        return this['storage_gears'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStorageGearsResponse {
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
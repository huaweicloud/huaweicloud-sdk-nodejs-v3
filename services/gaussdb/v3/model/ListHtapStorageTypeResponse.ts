import { HtapStorageTypeStorageType } from './HtapStorageTypeStorageType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHtapStorageTypeResponse extends SdkResponse {
    private 'storage_type'?: Array<HtapStorageTypeStorageType>;
    public constructor() { 
        super();
    }
    public withStorageType(storageType: Array<HtapStorageTypeStorageType>): ListHtapStorageTypeResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: Array<HtapStorageTypeStorageType>  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): Array<HtapStorageTypeStorageType> | undefined {
        return this['storage_type'];
    }
}
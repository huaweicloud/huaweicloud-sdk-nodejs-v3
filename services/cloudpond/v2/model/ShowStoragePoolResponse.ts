import { StoragePoolV2 } from './StoragePoolV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStoragePoolResponse extends SdkResponse {
    private 'storage_pool'?: StoragePoolV2;
    public constructor() { 
        super();
    }
    public withStoragePool(storagePool: StoragePoolV2): ShowStoragePoolResponse {
        this['storage_pool'] = storagePool;
        return this;
    }
    public set storagePool(storagePool: StoragePoolV2  | undefined) {
        this['storage_pool'] = storagePool;
    }
    public get storagePool(): StoragePoolV2 | undefined {
        return this['storage_pool'];
    }
}
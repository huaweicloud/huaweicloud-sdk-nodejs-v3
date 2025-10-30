import { StoragePool } from './StoragePool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStoragePoolResponse extends SdkResponse {
    private 'storage_pool'?: StoragePool;
    public constructor() { 
        super();
    }
    public withStoragePool(storagePool: StoragePool): ShowStoragePoolResponse {
        this['storage_pool'] = storagePool;
        return this;
    }
    public set storagePool(storagePool: StoragePool  | undefined) {
        this['storage_pool'] = storagePool;
    }
    public get storagePool(): StoragePool | undefined {
        return this['storage_pool'];
    }
}
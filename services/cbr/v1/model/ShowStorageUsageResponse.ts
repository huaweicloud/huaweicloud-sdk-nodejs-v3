import { StorageUsage } from './StorageUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStorageUsageResponse extends SdkResponse {
    private 'resource_count'?: number | undefined;
    private 'storage_usage'?: Array<StorageUsage> | undefined;
    public constructor() { 
        super();
    }
    public withResourceCount(resourceCount: number): ShowStorageUsageResponse {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount() {
        return this['resource_count'];
    }
    public withStorageUsage(storageUsage: Array<StorageUsage>): ShowStorageUsageResponse {
        this['storage_usage'] = storageUsage;
        return this;
    }
    public set storageUsage(storageUsage: Array<StorageUsage> | undefined) {
        this['storage_usage'] = storageUsage;
    }
    public get storageUsage() {
        return this['storage_usage'];
    }
}
import { StorageUsage } from './StorageUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStorageUsageResponse extends SdkResponse {
    private 'resource_count'?: number;
    private 'storage_usage'?: Array<StorageUsage>;
    public constructor() { 
        super();
    }
    public withResourceCount(resourceCount: number): ShowStorageUsageResponse {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
    public withStorageUsage(storageUsage: Array<StorageUsage>): ShowStorageUsageResponse {
        this['storage_usage'] = storageUsage;
        return this;
    }
    public set storageUsage(storageUsage: Array<StorageUsage>  | undefined) {
        this['storage_usage'] = storageUsage;
    }
    public get storageUsage(): Array<StorageUsage> | undefined {
        return this['storage_usage'];
    }
}
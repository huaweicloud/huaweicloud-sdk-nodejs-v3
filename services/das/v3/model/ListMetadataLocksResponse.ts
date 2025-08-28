import { MetadataLock } from './MetadataLock';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetadataLocksResponse extends SdkResponse {
    private 'metadata_locks'?: Array<MetadataLock>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withMetadataLocks(metadataLocks: Array<MetadataLock>): ListMetadataLocksResponse {
        this['metadata_locks'] = metadataLocks;
        return this;
    }
    public set metadataLocks(metadataLocks: Array<MetadataLock>  | undefined) {
        this['metadata_locks'] = metadataLocks;
    }
    public get metadataLocks(): Array<MetadataLock> | undefined {
        return this['metadata_locks'];
    }
    public withCount(count: number): ListMetadataLocksResponse {
        this['count'] = count;
        return this;
    }
}
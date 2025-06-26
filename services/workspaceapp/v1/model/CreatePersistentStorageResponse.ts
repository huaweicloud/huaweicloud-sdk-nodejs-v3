import { StorageMetadata } from './StorageMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePersistentStorageResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'storage_metadata'?: StorageMetadata;
    private 'create_time'?: Date;
    private 'user_claim_count'?: number;
    private 'share_claim_count'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePersistentStorageResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePersistentStorageResponse {
        this['name'] = name;
        return this;
    }
    public withStorageMetadata(storageMetadata: StorageMetadata): CreatePersistentStorageResponse {
        this['storage_metadata'] = storageMetadata;
        return this;
    }
    public set storageMetadata(storageMetadata: StorageMetadata  | undefined) {
        this['storage_metadata'] = storageMetadata;
    }
    public get storageMetadata(): StorageMetadata | undefined {
        return this['storage_metadata'];
    }
    public withCreateTime(createTime: Date): CreatePersistentStorageResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUserClaimCount(userClaimCount: number): CreatePersistentStorageResponse {
        this['user_claim_count'] = userClaimCount;
        return this;
    }
    public set userClaimCount(userClaimCount: number  | undefined) {
        this['user_claim_count'] = userClaimCount;
    }
    public get userClaimCount(): number | undefined {
        return this['user_claim_count'];
    }
    public withShareClaimCount(shareClaimCount: number): CreatePersistentStorageResponse {
        this['share_claim_count'] = shareClaimCount;
        return this;
    }
    public set shareClaimCount(shareClaimCount: number  | undefined) {
        this['share_claim_count'] = shareClaimCount;
    }
    public get shareClaimCount(): number | undefined {
        return this['share_claim_count'];
    }
}
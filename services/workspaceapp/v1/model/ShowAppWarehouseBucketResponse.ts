
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppWarehouseBucketResponse extends SdkResponse {
    public id?: string;
    private 'bucket_name'?: string;
    private 'is_user_create_bucket'?: boolean;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAppWarehouseBucketResponse {
        this['id'] = id;
        return this;
    }
    public withBucketName(bucketName: string): ShowAppWarehouseBucketResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withIsUserCreateBucket(isUserCreateBucket: boolean): ShowAppWarehouseBucketResponse {
        this['is_user_create_bucket'] = isUserCreateBucket;
        return this;
    }
    public set isUserCreateBucket(isUserCreateBucket: boolean  | undefined) {
        this['is_user_create_bucket'] = isUserCreateBucket;
    }
    public get isUserCreateBucket(): boolean | undefined {
        return this['is_user_create_bucket'];
    }
    public withUpdateTime(updateTime: Date): ShowAppWarehouseBucketResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}
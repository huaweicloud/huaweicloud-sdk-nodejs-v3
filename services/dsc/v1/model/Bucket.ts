

export class Bucket {
    private 'asset_name'?: string;
    private 'bucket_location'?: string;
    private 'bucket_name'?: string;
    private 'bucket_policy'?: string;
    private 'create_time'?: number;
    public deleted?: boolean;
    public id?: string;
    private 'is_deleted'?: boolean;
    public constructor() { 
    }
    public withAssetName(assetName: string): Bucket {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withBucketLocation(bucketLocation: string): Bucket {
        this['bucket_location'] = bucketLocation;
        return this;
    }
    public set bucketLocation(bucketLocation: string  | undefined) {
        this['bucket_location'] = bucketLocation;
    }
    public get bucketLocation(): string | undefined {
        return this['bucket_location'];
    }
    public withBucketName(bucketName: string): Bucket {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketPolicy(bucketPolicy: string): Bucket {
        this['bucket_policy'] = bucketPolicy;
        return this;
    }
    public set bucketPolicy(bucketPolicy: string  | undefined) {
        this['bucket_policy'] = bucketPolicy;
    }
    public get bucketPolicy(): string | undefined {
        return this['bucket_policy'];
    }
    public withCreateTime(createTime: number): Bucket {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeleted(deleted: boolean): Bucket {
        this['deleted'] = deleted;
        return this;
    }
    public withId(id: string): Bucket {
        this['id'] = id;
        return this;
    }
    public withIsDeleted(isDeleted: boolean): Bucket {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
}
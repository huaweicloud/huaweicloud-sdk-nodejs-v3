

export class SupabaseStorageComponentInfo {
    public enabled?: boolean;
    public type?: string;
    private 'bucket_name'?: string;
    public ak?: string;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): SupabaseStorageComponentInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: string): SupabaseStorageComponentInfo {
        this['type'] = type;
        return this;
    }
    public withBucketName(bucketName: string): SupabaseStorageComponentInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withAk(ak: string): SupabaseStorageComponentInfo {
        this['ak'] = ak;
        return this;
    }
}
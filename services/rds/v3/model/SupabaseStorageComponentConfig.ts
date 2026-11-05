

export class SupabaseStorageComponentConfig {
    public enabled?: boolean;
    public type?: SupabaseStorageComponentConfigTypeEnum | string;
    private 'bucket_name'?: string;
    public ak?: string;
    public sk?: string;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): SupabaseStorageComponentConfig {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: SupabaseStorageComponentConfigTypeEnum | string): SupabaseStorageComponentConfig {
        this['type'] = type;
        return this;
    }
    public withBucketName(bucketName: string): SupabaseStorageComponentConfig {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withAk(ak: string): SupabaseStorageComponentConfig {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): SupabaseStorageComponentConfig {
        this['sk'] = sk;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SupabaseStorageComponentConfigTypeEnum {
    OBS = 'obs'
}

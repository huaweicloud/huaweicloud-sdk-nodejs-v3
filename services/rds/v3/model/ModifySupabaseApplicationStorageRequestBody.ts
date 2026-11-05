

export class ModifySupabaseApplicationStorageRequestBody {
    public enabled?: boolean;
    public type?: ModifySupabaseApplicationStorageRequestBodyTypeEnum | string;
    private 'bucket_name'?: string;
    public ak?: string;
    public sk?: string;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): ModifySupabaseApplicationStorageRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: ModifySupabaseApplicationStorageRequestBodyTypeEnum | string): ModifySupabaseApplicationStorageRequestBody {
        this['type'] = type;
        return this;
    }
    public withBucketName(bucketName: string): ModifySupabaseApplicationStorageRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withAk(ak: string): ModifySupabaseApplicationStorageRequestBody {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ModifySupabaseApplicationStorageRequestBody {
        this['sk'] = sk;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifySupabaseApplicationStorageRequestBodyTypeEnum {
    OBS = 'obs'
}

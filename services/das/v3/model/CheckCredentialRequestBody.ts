

export class CheckCredentialRequestBody {
    private 'bucket_name'?: string;
    public ak?: string;
    public sk?: string;
    public constructor(bucketName?: string, ak?: string, sk?: string) { 
        this['bucket_name'] = bucketName;
        this['ak'] = ak;
        this['sk'] = sk;
    }
    public withBucketName(bucketName: string): CheckCredentialRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withAk(ak: string): CheckCredentialRequestBody {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): CheckCredentialRequestBody {
        this['sk'] = sk;
        return this;
    }
}
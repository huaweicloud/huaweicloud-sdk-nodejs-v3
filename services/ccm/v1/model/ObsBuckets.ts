

export class ObsBuckets {
    private 'bucket_name'?: string;
    private 'create_time'?: number;
    public constructor(bucketName?: string, createTime?: number) { 
        this['bucket_name'] = bucketName;
        this['create_time'] = createTime;
    }
    public withBucketName(bucketName: string): ObsBuckets {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withCreateTime(createTime: number): ObsBuckets {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}
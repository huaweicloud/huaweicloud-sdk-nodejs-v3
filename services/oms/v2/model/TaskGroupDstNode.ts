

export class TaskGroupDstNode {
    public ak?: string;
    public sk?: string;
    public region?: string;
    public bucket?: string;
    private 'cloud_type'?: string;
    private 'save_prefix'?: string;
    public constructor(ak?: string, sk?: string, region?: string, bucket?: string) { 
        this['ak'] = ak;
        this['sk'] = sk;
        this['region'] = region;
        this['bucket'] = bucket;
    }
    public withAk(ak: string): TaskGroupDstNode {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): TaskGroupDstNode {
        this['sk'] = sk;
        return this;
    }
    public withRegion(region: string): TaskGroupDstNode {
        this['region'] = region;
        return this;
    }
    public withBucket(bucket: string): TaskGroupDstNode {
        this['bucket'] = bucket;
        return this;
    }
    public withCloudType(cloudType: string): TaskGroupDstNode {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withSavePrefix(savePrefix: string): TaskGroupDstNode {
        this['save_prefix'] = savePrefix;
        return this;
    }
    public set savePrefix(savePrefix: string  | undefined) {
        this['save_prefix'] = savePrefix;
    }
    public get savePrefix(): string | undefined {
        return this['save_prefix'];
    }
}
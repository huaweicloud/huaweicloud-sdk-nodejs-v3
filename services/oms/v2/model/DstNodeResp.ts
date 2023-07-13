

export class DstNodeResp {
    public bucket?: string;
    public region?: string;
    private 'save_prefix'?: string | undefined;
    public constructor() { 
    }
    public withBucket(bucket: string): DstNodeResp {
        this['bucket'] = bucket;
        return this;
    }
    public withRegion(region: string): DstNodeResp {
        this['region'] = region;
        return this;
    }
    public withSavePrefix(savePrefix: string): DstNodeResp {
        this['save_prefix'] = savePrefix;
        return this;
    }
    public set savePrefix(savePrefix: string | undefined) {
        this['save_prefix'] = savePrefix;
    }
    public get savePrefix() {
        return this['save_prefix'];
    }
}
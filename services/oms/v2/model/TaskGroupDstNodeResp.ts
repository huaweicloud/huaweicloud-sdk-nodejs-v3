

export class TaskGroupDstNodeResp {
    public bucket?: string;
    public region?: string;
    private 'save_prefix'?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): TaskGroupDstNodeResp {
        this['bucket'] = bucket;
        return this;
    }
    public withRegion(region: string): TaskGroupDstNodeResp {
        this['region'] = region;
        return this;
    }
    public withSavePrefix(savePrefix: string): TaskGroupDstNodeResp {
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
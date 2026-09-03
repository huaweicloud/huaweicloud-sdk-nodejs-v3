

export class UploadUrlItem {
    public region?: string;
    private 'upload_url'?: string;
    private 'obs_bucket'?: string;
    private 'obs_object_key'?: string;
    public constructor() { 
    }
    public withRegion(region: string): UploadUrlItem {
        this['region'] = region;
        return this;
    }
    public withUploadUrl(uploadUrl: string): UploadUrlItem {
        this['upload_url'] = uploadUrl;
        return this;
    }
    public set uploadUrl(uploadUrl: string  | undefined) {
        this['upload_url'] = uploadUrl;
    }
    public get uploadUrl(): string | undefined {
        return this['upload_url'];
    }
    public withObsBucket(obsBucket: string): UploadUrlItem {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsObjectKey(obsObjectKey: string): UploadUrlItem {
        this['obs_object_key'] = obsObjectKey;
        return this;
    }
    public set obsObjectKey(obsObjectKey: string  | undefined) {
        this['obs_object_key'] = obsObjectKey;
    }
    public get obsObjectKey(): string | undefined {
        return this['obs_object_key'];
    }
}
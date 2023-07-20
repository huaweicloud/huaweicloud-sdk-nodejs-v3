

export class ShowTakeOverAssetDetailsRequest {
    private 'X-Sdk-Date'?: string;
    private 'source_bucket'?: string;
    private 'source_object'?: string;
    public constructor(sourceBucket?: string, sourceObject?: string) { 
        this['source_bucket'] = sourceBucket;
        this['source_object'] = sourceObject;
    }
    public withXSdkDate(xSdkDate: string): ShowTakeOverAssetDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withSourceBucket(sourceBucket: string): ShowTakeOverAssetDetailsRequest {
        this['source_bucket'] = sourceBucket;
        return this;
    }
    public set sourceBucket(sourceBucket: string  | undefined) {
        this['source_bucket'] = sourceBucket;
    }
    public get sourceBucket(): string | undefined {
        return this['source_bucket'];
    }
    public withSourceObject(sourceObject: string): ShowTakeOverAssetDetailsRequest {
        this['source_object'] = sourceObject;
        return this;
    }
    public set sourceObject(sourceObject: string  | undefined) {
        this['source_object'] = sourceObject;
    }
    public get sourceObject(): string | undefined {
        return this['source_object'];
    }
}
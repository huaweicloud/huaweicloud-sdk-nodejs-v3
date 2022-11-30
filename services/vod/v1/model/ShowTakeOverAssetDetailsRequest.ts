

export class ShowTakeOverAssetDetailsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'source_bucket': string | undefined;
    private 'source_object': string | undefined;
    public constructor(sourceBucket?: any, sourceObject?: any) { 
        this['source_bucket'] = sourceBucket;
        this['source_object'] = sourceObject;
    }
    public withAuthorization(authorization: string): ShowTakeOverAssetDetailsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowTakeOverAssetDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withSourceBucket(sourceBucket: string): ShowTakeOverAssetDetailsRequest {
        this['source_bucket'] = sourceBucket;
        return this;
    }
    public set sourceBucket(sourceBucket: string | undefined) {
        this['source_bucket'] = sourceBucket;
    }
    public get sourceBucket() {
        return this['source_bucket'];
    }
    public withSourceObject(sourceObject: string): ShowTakeOverAssetDetailsRequest {
        this['source_object'] = sourceObject;
        return this;
    }
    public set sourceObject(sourceObject: string | undefined) {
        this['source_object'] = sourceObject;
    }
    public get sourceObject() {
        return this['source_object'];
    }
}


export class ShowObjectMetaDataRequest {
    private 'X-Sdk-Date'?: string;
    public bucket?: string;
    private 'object'?: string;
    public marker?: string;
    public limit?: number;
    public constructor(bucket?: string) { 
        this['bucket'] = bucket;
    }
    public withXSdkDate(xSdkDate: string): ShowObjectMetaDataRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBucket(bucket: string): ShowObjectMetaDataRequest {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): ShowObjectMetaDataRequest {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withMarker(marker: string): ShowObjectMetaDataRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ShowObjectMetaDataRequest {
        this['limit'] = limit;
        return this;
    }
}
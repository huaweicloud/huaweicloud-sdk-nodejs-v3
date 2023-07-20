

export class ShowAssetTempAuthorityRequest {
    private 'X-Sdk-Date'?: string;
    private 'http_verb'?: string;
    public bucket?: string;
    private 'object_key'?: string;
    private 'content_type'?: string;
    private 'content_md5'?: string;
    private 'upload_id'?: string;
    private 'part_number'?: number;
    public constructor(httpVerb?: string, bucket?: string, objectKey?: string) { 
        this['http_verb'] = httpVerb;
        this['bucket'] = bucket;
        this['object_key'] = objectKey;
    }
    public withXSdkDate(xSdkDate: string): ShowAssetTempAuthorityRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withHttpVerb(httpVerb: string): ShowAssetTempAuthorityRequest {
        this['http_verb'] = httpVerb;
        return this;
    }
    public set httpVerb(httpVerb: string  | undefined) {
        this['http_verb'] = httpVerb;
    }
    public get httpVerb(): string | undefined {
        return this['http_verb'];
    }
    public withBucket(bucket: string): ShowAssetTempAuthorityRequest {
        this['bucket'] = bucket;
        return this;
    }
    public withObjectKey(objectKey: string): ShowAssetTempAuthorityRequest {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: string  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): string | undefined {
        return this['object_key'];
    }
    public withContentType(contentType: string): ShowAssetTempAuthorityRequest {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
    public withContentMd5(contentMd5: string): ShowAssetTempAuthorityRequest {
        this['content_md5'] = contentMd5;
        return this;
    }
    public set contentMd5(contentMd5: string  | undefined) {
        this['content_md5'] = contentMd5;
    }
    public get contentMd5(): string | undefined {
        return this['content_md5'];
    }
    public withUploadId(uploadId: string): ShowAssetTempAuthorityRequest {
        this['upload_id'] = uploadId;
        return this;
    }
    public set uploadId(uploadId: string  | undefined) {
        this['upload_id'] = uploadId;
    }
    public get uploadId(): string | undefined {
        return this['upload_id'];
    }
    public withPartNumber(partNumber: number): ShowAssetTempAuthorityRequest {
        this['part_number'] = partNumber;
        return this;
    }
    public set partNumber(partNumber: number  | undefined) {
        this['part_number'] = partNumber;
    }
    public get partNumber(): number | undefined {
        return this['part_number'];
    }
}
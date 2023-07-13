

export class ShowAssetTempAuthorityRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'http_verb': string | undefined;
    public bucket: string;
    private 'object_key': string | undefined;
    private 'content_type'?: string | undefined;
    private 'content_md5'?: string | undefined;
    private 'upload_id'?: string | undefined;
    private 'part_number'?: number | undefined;
    public constructor(httpVerb?: any, bucket?: any, objectKey?: any) { 
        this['http_verb'] = httpVerb;
        this['bucket'] = bucket;
        this['object_key'] = objectKey;
    }
    public withXSdkDate(xSdkDate: string): ShowAssetTempAuthorityRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withHttpVerb(httpVerb: string): ShowAssetTempAuthorityRequest {
        this['http_verb'] = httpVerb;
        return this;
    }
    public set httpVerb(httpVerb: string | undefined) {
        this['http_verb'] = httpVerb;
    }
    public get httpVerb() {
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
    public set objectKey(objectKey: string | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey() {
        return this['object_key'];
    }
    public withContentType(contentType: string): ShowAssetTempAuthorityRequest {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType() {
        return this['content_type'];
    }
    public withContentMd5(contentMd5: string): ShowAssetTempAuthorityRequest {
        this['content_md5'] = contentMd5;
        return this;
    }
    public set contentMd5(contentMd5: string | undefined) {
        this['content_md5'] = contentMd5;
    }
    public get contentMd5() {
        return this['content_md5'];
    }
    public withUploadId(uploadId: string): ShowAssetTempAuthorityRequest {
        this['upload_id'] = uploadId;
        return this;
    }
    public set uploadId(uploadId: string | undefined) {
        this['upload_id'] = uploadId;
    }
    public get uploadId() {
        return this['upload_id'];
    }
    public withPartNumber(partNumber: number): ShowAssetTempAuthorityRequest {
        this['part_number'] = partNumber;
        return this;
    }
    public set partNumber(partNumber: number | undefined) {
        this['part_number'] = partNumber;
    }
    public get partNumber() {
        return this['part_number'];
    }
}


export class ExportImageRequestBody {
    private 'bucket_url': string | undefined;
    private 'file_format': ExportImageRequestBodyFileFormatEnum | undefined;
    private 'is_quick_export'?: boolean | undefined;
    public constructor(bucketUrl?: any, fileFormat?: any) { 
        this['bucket_url'] = bucketUrl;
        this['file_format'] = fileFormat;
    }
    public withBucketUrl(bucketUrl: string): ExportImageRequestBody {
        this['bucket_url'] = bucketUrl;
        return this;
    }
    public set bucketUrl(bucketUrl: string | undefined) {
        this['bucket_url'] = bucketUrl;
    }
    public get bucketUrl() {
        return this['bucket_url'];
    }
    public withFileFormat(fileFormat: ExportImageRequestBodyFileFormatEnum): ExportImageRequestBody {
        this['file_format'] = fileFormat;
        return this;
    }
    public set fileFormat(fileFormat: ExportImageRequestBodyFileFormatEnum | undefined) {
        this['file_format'] = fileFormat;
    }
    public get fileFormat() {
        return this['file_format'];
    }
    public withIsQuickExport(isQuickExport: boolean): ExportImageRequestBody {
        this['is_quick_export'] = isQuickExport;
        return this;
    }
    public set isQuickExport(isQuickExport: boolean | undefined) {
        this['is_quick_export'] = isQuickExport;
    }
    public get isQuickExport() {
        return this['is_quick_export'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportImageRequestBodyFileFormatEnum {
    QCOW2 = 'qcow2',
    VHD = 'vhd',
    ZVHD = 'zvhd',
    VMDK = 'vmdk'
}

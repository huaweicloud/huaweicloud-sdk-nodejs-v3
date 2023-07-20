

export class ExportImageRequestBody {
    private 'bucket_url'?: string;
    private 'file_format'?: ExportImageRequestBodyFileFormatEnum | string;
    private 'is_quick_export'?: boolean;
    public constructor(bucketUrl?: string, fileFormat?: string) { 
        this['bucket_url'] = bucketUrl;
        this['file_format'] = fileFormat;
    }
    public withBucketUrl(bucketUrl: string): ExportImageRequestBody {
        this['bucket_url'] = bucketUrl;
        return this;
    }
    public set bucketUrl(bucketUrl: string  | undefined) {
        this['bucket_url'] = bucketUrl;
    }
    public get bucketUrl(): string | undefined {
        return this['bucket_url'];
    }
    public withFileFormat(fileFormat: ExportImageRequestBodyFileFormatEnum | string): ExportImageRequestBody {
        this['file_format'] = fileFormat;
        return this;
    }
    public set fileFormat(fileFormat: ExportImageRequestBodyFileFormatEnum | string  | undefined) {
        this['file_format'] = fileFormat;
    }
    public get fileFormat(): ExportImageRequestBodyFileFormatEnum | string | undefined {
        return this['file_format'];
    }
    public withIsQuickExport(isQuickExport: boolean): ExportImageRequestBody {
        this['is_quick_export'] = isQuickExport;
        return this;
    }
    public set isQuickExport(isQuickExport: boolean  | undefined) {
        this['is_quick_export'] = isQuickExport;
    }
    public get isQuickExport(): boolean | undefined {
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

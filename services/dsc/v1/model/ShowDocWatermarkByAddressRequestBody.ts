

export class ShowDocWatermarkByAddressRequestBody {
    private 'region_id'?: string;
    private 'doc_type'?: ShowDocWatermarkByAddressRequestBodyDocTypeEnum | string;
    private 'src_file'?: string;
    private 'file_password'?: string;
    public constructor(regionId?: string, docType?: string, srcFile?: string) { 
        this['region_id'] = regionId;
        this['doc_type'] = docType;
        this['src_file'] = srcFile;
    }
    public withRegionId(regionId: string): ShowDocWatermarkByAddressRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDocType(docType: ShowDocWatermarkByAddressRequestBodyDocTypeEnum | string): ShowDocWatermarkByAddressRequestBody {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: ShowDocWatermarkByAddressRequestBodyDocTypeEnum | string  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): ShowDocWatermarkByAddressRequestBodyDocTypeEnum | string | undefined {
        return this['doc_type'];
    }
    public withSrcFile(srcFile: string): ShowDocWatermarkByAddressRequestBody {
        this['src_file'] = srcFile;
        return this;
    }
    public set srcFile(srcFile: string  | undefined) {
        this['src_file'] = srcFile;
    }
    public get srcFile(): string | undefined {
        return this['src_file'];
    }
    public withFilePassword(filePassword: string): ShowDocWatermarkByAddressRequestBody {
        this['file_password'] = filePassword;
        return this;
    }
    public set filePassword(filePassword: string  | undefined) {
        this['file_password'] = filePassword;
    }
    public get filePassword(): string | undefined {
        return this['file_password'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDocWatermarkByAddressRequestBodyDocTypeEnum {
    WORD = 'WORD',
    EXCEL = 'EXCEL',
    PDF = 'PDF',
    PPT = 'PPT'
}

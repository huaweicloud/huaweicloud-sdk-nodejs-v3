

export class LargeFilesCreateReq {
    private 'file_name'?: string;
    private 'file_size'?: number;
    private 'file_type'?: string;
    private 'asset_id'?: string;
    private 'asset_file_category'?: string;
    private 'file_multipart_count'?: number;
    public constructor(fileName?: string, fileType?: string, assetId?: string, assetFileCategory?: string) { 
        this['file_name'] = fileName;
        this['file_type'] = fileType;
        this['asset_id'] = assetId;
        this['asset_file_category'] = assetFileCategory;
    }
    public withFileName(fileName: string): LargeFilesCreateReq {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: number): LargeFilesCreateReq {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: string): LargeFilesCreateReq {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withAssetId(assetId: string): LargeFilesCreateReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetFileCategory(assetFileCategory: string): LargeFilesCreateReq {
        this['asset_file_category'] = assetFileCategory;
        return this;
    }
    public set assetFileCategory(assetFileCategory: string  | undefined) {
        this['asset_file_category'] = assetFileCategory;
    }
    public get assetFileCategory(): string | undefined {
        return this['asset_file_category'];
    }
    public withFileMultipartCount(fileMultipartCount: number): LargeFilesCreateReq {
        this['file_multipart_count'] = fileMultipartCount;
        return this;
    }
    public set fileMultipartCount(fileMultipartCount: number  | undefined) {
        this['file_multipart_count'] = fileMultipartCount;
    }
    public get fileMultipartCount(): number | undefined {
        return this['file_multipart_count'];
    }
}
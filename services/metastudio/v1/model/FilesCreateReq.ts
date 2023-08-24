

export class FilesCreateReq {
    private 'file_name'?: string;
    private 'file_md5'?: string;
    private 'file_size'?: number;
    private 'file_type'?: string;
    private 'asset_id'?: string;
    private 'asset_file_category'?: string;
    public constructor(fileName?: string, fileMd5?: string, fileSize?: number, fileType?: string, assetId?: string, assetFileCategory?: string) { 
        this['file_name'] = fileName;
        this['file_md5'] = fileMd5;
        this['file_size'] = fileSize;
        this['file_type'] = fileType;
        this['asset_id'] = assetId;
        this['asset_file_category'] = assetFileCategory;
    }
    public withFileName(fileName: string): FilesCreateReq {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileMd5(fileMd5: string): FilesCreateReq {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileSize(fileSize: number): FilesCreateReq {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: string): FilesCreateReq {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withAssetId(assetId: string): FilesCreateReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetFileCategory(assetFileCategory: string): FilesCreateReq {
        this['asset_file_category'] = assetFileCategory;
        return this;
    }
    public set assetFileCategory(assetFileCategory: string  | undefined) {
        this['asset_file_category'] = assetFileCategory;
    }
    public get assetFileCategory(): string | undefined {
        return this['asset_file_category'];
    }
}


export class AssetFileInfo {
    private 'file_id'?: string;
    private 'file_name'?: string;
    private 'file_md5'?: string;
    private 'file_size'?: number;
    private 'file_type'?: string;
    private 'asset_file_category'?: string;
    private 'download_url'?: string;
    public constructor() { 
    }
    public withFileId(fileId: string): AssetFileInfo {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileName(fileName: string): AssetFileInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileMd5(fileMd5: string): AssetFileInfo {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileSize(fileSize: number): AssetFileInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: string): AssetFileInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withAssetFileCategory(assetFileCategory: string): AssetFileInfo {
        this['asset_file_category'] = assetFileCategory;
        return this;
    }
    public set assetFileCategory(assetFileCategory: string  | undefined) {
        this['asset_file_category'] = assetFileCategory;
    }
    public get assetFileCategory(): string | undefined {
        return this['asset_file_category'];
    }
    public withDownloadUrl(downloadUrl: string): AssetFileInfo {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
}
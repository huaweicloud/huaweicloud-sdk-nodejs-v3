

export class BatchUploadFilesResponseInfoSuccessFileInfo {
    private 'file_name'?: string;
    private 'file_id'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): BatchUploadFilesResponseInfoSuccessFileInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileId(fileId: string): BatchUploadFilesResponseInfoSuccessFileInfo {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
}
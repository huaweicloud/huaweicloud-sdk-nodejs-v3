

export class BatchUploadFilesResponseInfoFailFileInfo {
    private 'file_name'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): BatchUploadFilesResponseInfoFailFileInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFailReason(failReason: string): BatchUploadFilesResponseInfoFailFileInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}
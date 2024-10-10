

export class BackupFileResp {
    private 'file_name'?: string;
    private 'file_size'?: string;
    private 'file_last_modify'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): BackupFileResp {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: string): BackupFileResp {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withFileLastModify(fileLastModify: string): BackupFileResp {
        this['file_last_modify'] = fileLastModify;
        return this;
    }
    public set fileLastModify(fileLastModify: string  | undefined) {
        this['file_last_modify'] = fileLastModify;
    }
    public get fileLastModify(): string | undefined {
        return this['file_last_modify'];
    }
}
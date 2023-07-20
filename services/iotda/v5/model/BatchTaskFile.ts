

export class BatchTaskFile {
    private 'file_id'?: string;
    private 'file_name'?: string;
    private 'upload_time'?: string;
    public constructor() { 
    }
    public withFileId(fileId: string): BatchTaskFile {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileName(fileName: string): BatchTaskFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withUploadTime(uploadTime: string): BatchTaskFile {
        this['upload_time'] = uploadTime;
        return this;
    }
    public set uploadTime(uploadTime: string  | undefined) {
        this['upload_time'] = uploadTime;
    }
    public get uploadTime(): string | undefined {
        return this['upload_time'];
    }
}
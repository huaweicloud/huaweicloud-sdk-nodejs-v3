

export class BatchTaskFile {
    private 'file_id'?: string | undefined;
    private 'file_name'?: string | undefined;
    private 'upload_time'?: string | undefined;
    public constructor() { 
    }
    public withFileId(fileId: string): BatchTaskFile {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
    public withFileName(fileName: string): BatchTaskFile {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withUploadTime(uploadTime: string): BatchTaskFile {
        this['upload_time'] = uploadTime;
        return this;
    }
    public set uploadTime(uploadTime: string | undefined) {
        this['upload_time'] = uploadTime;
    }
    public get uploadTime() {
        return this['upload_time'];
    }
}
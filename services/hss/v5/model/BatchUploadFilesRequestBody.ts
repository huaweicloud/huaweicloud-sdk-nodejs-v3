

export class BatchUploadFilesRequestBody {
    private 'upload_type'?: string;
    public files?: Array<object>;
    public constructor(uploadType?: string, files?: Array<object>) { 
        this['upload_type'] = uploadType;
        this['files'] = files;
    }
    public withUploadType(uploadType: string): BatchUploadFilesRequestBody {
        this['upload_type'] = uploadType;
        return this;
    }
    public set uploadType(uploadType: string  | undefined) {
        this['upload_type'] = uploadType;
    }
    public get uploadType(): string | undefined {
        return this['upload_type'];
    }
    public withFiles(files: Array<object>): BatchUploadFilesRequestBody {
        this['files'] = files;
        return this;
    }
}
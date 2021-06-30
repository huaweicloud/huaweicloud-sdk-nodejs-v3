

export class UploadBatchTaskFileRequestBody {
    public file: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadBatchTaskFileRequestBody {
        this['file'] = file;
        return this;
    }
}


export class UploadFileRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadFileRequestBody {
        this['file'] = file;
        return this;
    }
}
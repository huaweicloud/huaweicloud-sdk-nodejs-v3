

export class UploadSignatureFileRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadSignatureFileRequestBody {
        this['file'] = file;
        return this;
    }
}
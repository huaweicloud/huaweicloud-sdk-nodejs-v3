

export class UploadAgentFileRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadAgentFileRequestBody {
        this['file'] = file;
        return this;
    }
}
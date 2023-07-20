

export class UploadDbObjectTemplateRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadDbObjectTemplateRequestBody {
        this['file'] = file;
        return this;
    }
}
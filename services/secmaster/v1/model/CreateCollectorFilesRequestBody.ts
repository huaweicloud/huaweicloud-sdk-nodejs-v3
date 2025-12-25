

export class CreateCollectorFilesRequestBody {
    public file?: any;
    public constructor() { 
    }
    public withFile(file: any): CreateCollectorFilesRequestBody {
        this['file'] = file;
        return this;
    }
}
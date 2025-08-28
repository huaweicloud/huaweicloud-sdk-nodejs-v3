

export class CreateDocumentRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): CreateDocumentRequestBody {
        this['file'] = file;
        return this;
    }
}


export class UpdateDocumentRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UpdateDocumentRequestBody {
        this['file'] = file;
        return this;
    }
}
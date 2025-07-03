

export class CreateExternalCocAttachmentRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): CreateExternalCocAttachmentRequestBody {
        this['file'] = file;
        return this;
    }
}
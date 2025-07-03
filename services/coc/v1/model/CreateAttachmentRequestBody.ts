

export class CreateAttachmentRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): CreateAttachmentRequestBody {
        this['file'] = file;
        return this;
    }
}
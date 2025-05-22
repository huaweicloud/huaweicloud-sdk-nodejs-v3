

export class UploadAttachmentsRequestBody {
    public attachment?: any;
    public constructor(attachment?: any) { 
        this['attachment'] = attachment;
    }
    public withAttachment(attachment: any): UploadAttachmentsRequestBody {
        this['attachment'] = attachment;
        return this;
    }
}
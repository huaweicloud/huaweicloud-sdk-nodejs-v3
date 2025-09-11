

export class CreateIpdProjectIssueAttachmentRequestBody {
    public attachment?: any;
    public constructor(attachment?: any) { 
        this['attachment'] = attachment;
    }
    public withAttachment(attachment: any): CreateIpdProjectIssueAttachmentRequestBody {
        this['attachment'] = attachment;
        return this;
    }
}
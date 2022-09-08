import { UpdateAttachmentBody } from './UpdateAttachmentBody';


export class UpdateAttachmentRequestBody {
    public attachment?: UpdateAttachmentBody;
    public constructor() { 
    }
    public withAttachment(attachment: UpdateAttachmentBody): UpdateAttachmentRequestBody {
        this['attachment'] = attachment;
        return this;
    }
}
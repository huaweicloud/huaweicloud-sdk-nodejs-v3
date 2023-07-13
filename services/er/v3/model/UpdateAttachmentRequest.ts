import { UpdateAttachmentRequestBody } from './UpdateAttachmentRequestBody';


export class UpdateAttachmentRequest {
    private 'er_id': string | undefined;
    private 'attachment_id': string | undefined;
    public body?: UpdateAttachmentRequestBody;
    public constructor(erId?: any, attachmentId?: any) { 
        this['er_id'] = erId;
        this['attachment_id'] = attachmentId;
    }
    public withErId(erId: string): UpdateAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withAttachmentId(attachmentId: string): UpdateAttachmentRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withBody(body: UpdateAttachmentRequestBody): UpdateAttachmentRequest {
        this['body'] = body;
        return this;
    }
}
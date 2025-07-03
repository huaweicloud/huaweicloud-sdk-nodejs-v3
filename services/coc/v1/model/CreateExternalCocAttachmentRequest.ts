import { CreateExternalCocAttachmentRequestBody } from './CreateExternalCocAttachmentRequestBody';


export class CreateExternalCocAttachmentRequest {
    public body?: CreateExternalCocAttachmentRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateExternalCocAttachmentRequestBody): CreateExternalCocAttachmentRequest {
        this['body'] = body;
        return this;
    }
}
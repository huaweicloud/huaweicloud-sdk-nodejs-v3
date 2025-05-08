import { CreateDocumentRequestBody } from './CreateDocumentRequestBody';


export class CreateDocumentRequest {
    public body?: CreateDocumentRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDocumentRequestBody): CreateDocumentRequest {
        this['body'] = body;
        return this;
    }
}
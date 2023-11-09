import { DocumentCreateRequest } from './DocumentCreateRequest';


export class RunCreateDocumentModerationJobRequest {
    public body?: DocumentCreateRequest;
    public constructor() { 
    }
    public withBody(body: DocumentCreateRequest): RunCreateDocumentModerationJobRequest {
        this['body'] = body;
        return this;
    }
}
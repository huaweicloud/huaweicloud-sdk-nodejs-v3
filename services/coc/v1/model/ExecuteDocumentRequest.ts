import { ExecuteDocumentRequsetBody } from './ExecuteDocumentRequsetBody';


export class ExecuteDocumentRequest {
    private 'document_id'?: string;
    public body?: ExecuteDocumentRequsetBody;
    public constructor(documentId?: string) { 
        this['document_id'] = documentId;
    }
    public withDocumentId(documentId: string): ExecuteDocumentRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withBody(body: ExecuteDocumentRequsetBody): ExecuteDocumentRequest {
        this['body'] = body;
        return this;
    }
}
import { UpdateRunbookRequestBody } from './UpdateRunbookRequestBody';


export class UpdateDocumentRequest {
    private 'document_id'?: string;
    public body?: UpdateRunbookRequestBody;
    public constructor(documentId?: string) { 
        this['document_id'] = documentId;
    }
    public withDocumentId(documentId: string): UpdateDocumentRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withBody(body: UpdateRunbookRequestBody): UpdateDocumentRequest {
        this['body'] = body;
        return this;
    }
}
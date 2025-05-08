

export class DeleteDocumentRequest {
    private 'document_id'?: string;
    public constructor(documentId?: string) { 
        this['document_id'] = documentId;
    }
    public withDocumentId(documentId: string): DeleteDocumentRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
}
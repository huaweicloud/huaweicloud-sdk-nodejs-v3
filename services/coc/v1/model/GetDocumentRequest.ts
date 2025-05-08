

export class GetDocumentRequest {
    private 'document_id'?: string;
    public version?: string;
    private 'document_type'?: string;
    public constructor(documentId?: string) { 
        this['document_id'] = documentId;
    }
    public withDocumentId(documentId: string): GetDocumentRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withVersion(version: string): GetDocumentRequest {
        this['version'] = version;
        return this;
    }
    public withDocumentType(documentType: string): GetDocumentRequest {
        this['document_type'] = documentType;
        return this;
    }
    public set documentType(documentType: string  | undefined) {
        this['document_type'] = documentType;
    }
    public get documentType(): string | undefined {
        return this['document_type'];
    }
}
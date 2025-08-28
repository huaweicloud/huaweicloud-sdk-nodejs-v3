

export class UpdateDocumentSegmentReq {
    private 'document_id'?: string;
    public id?: string;
    private 'text_index'?: number;
    public text?: string;
    public constructor(documentId?: string, id?: string) { 
        this['document_id'] = documentId;
        this['id'] = id;
    }
    public withDocumentId(documentId: string): UpdateDocumentSegmentReq {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withId(id: string): UpdateDocumentSegmentReq {
        this['id'] = id;
        return this;
    }
    public withTextIndex(textIndex: number): UpdateDocumentSegmentReq {
        this['text_index'] = textIndex;
        return this;
    }
    public set textIndex(textIndex: number  | undefined) {
        this['text_index'] = textIndex;
    }
    public get textIndex(): number | undefined {
        return this['text_index'];
    }
    public withText(text: string): UpdateDocumentSegmentReq {
        this['text'] = text;
        return this;
    }
}
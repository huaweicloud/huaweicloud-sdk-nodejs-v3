

export class ExternalAttachment {
    private 'doc_id'?: string;
    private 'doc_name'?: string;
    public constructor() { 
    }
    public withDocId(docId: string): ExternalAttachment {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: string  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): string | undefined {
        return this['doc_id'];
    }
    public withDocName(docName: string): ExternalAttachment {
        this['doc_name'] = docName;
        return this;
    }
    public set docName(docName: string  | undefined) {
        this['doc_name'] = docName;
    }
    public get docName(): string | undefined {
        return this['doc_name'];
    }
}
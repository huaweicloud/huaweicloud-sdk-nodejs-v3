

export class ListDocumentAtomicsRequest {
    public limit?: string;
    public offset?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListDocumentAtomicsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDocumentAtomicsRequest {
        this['offset'] = offset;
        return this;
    }
}
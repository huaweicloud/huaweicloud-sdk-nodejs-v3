

export class ConfirmApplicationTypesRequest {
    private 'Content-Type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ConfirmApplicationTypesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOffset(offset: number): ConfirmApplicationTypesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ConfirmApplicationTypesRequest {
        this['limit'] = limit;
        return this;
    }
}
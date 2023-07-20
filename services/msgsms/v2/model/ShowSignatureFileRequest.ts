

export class ShowSignatureFileRequest {
    private 'Content-Type'?: string;
    private 'file_id'?: string;
    public constructor(contentType?: string, fileId?: string) { 
        this['Content-Type'] = contentType;
        this['file_id'] = fileId;
    }
    public withContentType(contentType: string): ShowSignatureFileRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withFileId(fileId: string): ShowSignatureFileRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
}
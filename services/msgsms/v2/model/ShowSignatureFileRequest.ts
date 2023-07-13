

export class ShowSignatureFileRequest {
    private 'Content-Type': string | undefined;
    private 'file_id': string | undefined;
    public constructor(contentType?: any, fileId?: any) { 
        this['Content-Type'] = contentType;
        this['file_id'] = fileId;
    }
    public withContentType(contentType: string): ShowSignatureFileRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withFileId(fileId: string): ShowSignatureFileRequest {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
}
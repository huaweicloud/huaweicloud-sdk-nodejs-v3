import { UploadSignatureFileRequestBody } from './UploadSignatureFileRequestBody';


export class UploadSignatureFileRequest {
    private 'Content-Type'?: string;
    private 'file_desc'?: string;
    public body?: UploadSignatureFileRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UploadSignatureFileRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withFileDesc(fileDesc: string): UploadSignatureFileRequest {
        this['file_desc'] = fileDesc;
        return this;
    }
    public set fileDesc(fileDesc: string  | undefined) {
        this['file_desc'] = fileDesc;
    }
    public get fileDesc(): string | undefined {
        return this['file_desc'];
    }
    public withBody(body: UploadSignatureFileRequestBody): UploadSignatureFileRequest {
        this['body'] = body;
        return this;
    }
}
import { DocumentSegmentParam } from './DocumentSegmentParam';


export class PreviewDocumentSegmentRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'document_id'?: string;
    private 'preview_lines'?: number;
    public body?: DocumentSegmentParam;
    public constructor(documentId?: string) { 
        this['document_id'] = documentId;
    }
    public withAuthorization(authorization: string): PreviewDocumentSegmentRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): PreviewDocumentSegmentRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): PreviewDocumentSegmentRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): PreviewDocumentSegmentRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withDocumentId(documentId: string): PreviewDocumentSegmentRequest {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withPreviewLines(previewLines: number): PreviewDocumentSegmentRequest {
        this['preview_lines'] = previewLines;
        return this;
    }
    public set previewLines(previewLines: number  | undefined) {
        this['preview_lines'] = previewLines;
    }
    public get previewLines(): number | undefined {
        return this['preview_lines'];
    }
    public withBody(body: DocumentSegmentParam): PreviewDocumentSegmentRequest {
        this['body'] = body;
        return this;
    }
}
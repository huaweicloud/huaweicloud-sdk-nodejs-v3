

export class UploadByUrlReq {
    public bucket?: string;
    private 'object'?: string;
    public url?: string;
    private 'file_type'?: string;
    public title?: string;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): UploadByUrlReq {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): UploadByUrlReq {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withUrl(url: string): UploadByUrlReq {
        this['url'] = url;
        return this;
    }
    public withFileType(fileType: string): UploadByUrlReq {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withTitle(title: string): UploadByUrlReq {
        this['title'] = title;
        return this;
    }
    public withCallbackUrl(callbackUrl: string): UploadByUrlReq {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): UploadByUrlReq {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: string  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): string | undefined {
        return this['session_context'];
    }
}
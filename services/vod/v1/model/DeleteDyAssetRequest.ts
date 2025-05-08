

export class DeleteDyAssetRequest {
    private 'X-Sdk-Date'?: string;
    public bucket?: string;
    private 'object'?: Array<string>;
    private 'callback_url'?: string;
    private 'session_context'?: string;
    public constructor(bucket?: string, modelObject?: Array<string>) { 
        this['bucket'] = bucket;
        this['object'] = modelObject;
    }
    public withXSdkDate(xSdkDate: string): DeleteDyAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBucket(bucket: string): DeleteDyAssetRequest {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: Array<string>): DeleteDyAssetRequest {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: Array<string>  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): Array<string> | undefined {
        return this['object'];
    }
    public withCallbackUrl(callbackUrl: string): DeleteDyAssetRequest {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSessionContext(sessionContext: string): DeleteDyAssetRequest {
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
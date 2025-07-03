import { ExternalAttachment } from './ExternalAttachment';
import { ResponseBodyTemplate } from './ResponseBodyTemplate';


export class UploadFileResponse {
    public code?: string;
    private 'provider_code'?: string;
    public msg?: string;
    public data?: ExternalAttachment;
    public constructor() { 
    }
    public withCode(code: string): UploadFileResponse {
        this['code'] = code;
        return this;
    }
    public withProviderCode(providerCode: string): UploadFileResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withMsg(msg: string): UploadFileResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: ExternalAttachment): UploadFileResponse {
        this['data'] = data;
        return this;
    }
}
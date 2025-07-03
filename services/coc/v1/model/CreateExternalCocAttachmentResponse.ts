import { ExternalAttachment } from './ExternalAttachment';
import { ResponseBodyTemplate } from './ResponseBodyTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExternalCocAttachmentResponse extends SdkResponse {
    public code?: string;
    private 'provider_code'?: string;
    public msg?: string;
    public data?: ExternalAttachment;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateExternalCocAttachmentResponse {
        this['code'] = code;
        return this;
    }
    public withProviderCode(providerCode: string): CreateExternalCocAttachmentResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withMsg(msg: string): CreateExternalCocAttachmentResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: ExternalAttachment): CreateExternalCocAttachmentResponse {
        this['data'] = data;
        return this;
    }
}
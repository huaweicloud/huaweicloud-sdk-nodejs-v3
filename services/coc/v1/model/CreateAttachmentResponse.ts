import { ExternalAttachment } from './ExternalAttachment';
import { UploadFileResponse } from './UploadFileResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAttachmentResponse extends SdkResponse {
    public code?: string;
    private 'provider_code'?: string;
    public msg?: string;
    public data?: ExternalAttachment;
    public name?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateAttachmentResponse {
        this['code'] = code;
        return this;
    }
    public withProviderCode(providerCode: string): CreateAttachmentResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withMsg(msg: string): CreateAttachmentResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: ExternalAttachment): CreateAttachmentResponse {
        this['data'] = data;
        return this;
    }
    public withName(name: string): CreateAttachmentResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): CreateAttachmentResponse {
        this['id'] = id;
        return this;
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DecryptDataResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'plain_text'?: string;
    private 'plain_text_base64'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): DecryptDataResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPlainText(plainText: string): DecryptDataResponse {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string  | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText(): string | undefined {
        return this['plain_text'];
    }
    public withPlainTextBase64(plainTextBase64: string): DecryptDataResponse {
        this['plain_text_base64'] = plainTextBase64;
        return this;
    }
    public set plainTextBase64(plainTextBase64: string  | undefined) {
        this['plain_text_base64'] = plainTextBase64;
    }
    public get plainTextBase64(): string | undefined {
        return this['plain_text_base64'];
    }
}
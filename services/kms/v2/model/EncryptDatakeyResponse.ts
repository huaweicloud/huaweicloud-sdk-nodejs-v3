
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EncryptDatakeyResponse extends SdkResponse {
    private 'key_id'?: string | undefined;
    private 'cipher_text'?: string | undefined;
    private 'datakey_length'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): EncryptDatakeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withCipherText(cipherText: string): EncryptDatakeyResponse {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText() {
        return this['cipher_text'];
    }
    public withDatakeyLength(datakeyLength: string): EncryptDatakeyResponse {
        this['datakey_length'] = datakeyLength;
        return this;
    }
    public set datakeyLength(datakeyLength: string | undefined) {
        this['datakey_length'] = datakeyLength;
    }
    public get datakeyLength() {
        return this['datakey_length'];
    }
}
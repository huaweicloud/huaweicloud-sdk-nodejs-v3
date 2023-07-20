
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatakeyWithoutPlaintextResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'cipher_text'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateDatakeyWithoutPlaintextResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withCipherText(cipherText: string): CreateDatakeyWithoutPlaintextResponse {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string  | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText(): string | undefined {
        return this['cipher_text'];
    }
}
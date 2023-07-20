
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicKeyResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'public_key'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ShowPublicKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPublicKey(publicKey: string): ShowPublicKeyResponse {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
}
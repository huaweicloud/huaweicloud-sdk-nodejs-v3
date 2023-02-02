
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicKeyResponse extends SdkResponse {
    private 'key_id'?: string | undefined;
    private 'public_key'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ShowPublicKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withPublicKey(publicKey: string): ShowPublicKeyResponse {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
        return this['public_key'];
    }
}
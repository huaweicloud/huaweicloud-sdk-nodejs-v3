
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateParametersForImportResponse extends SdkResponse {
    private 'key_id'?: string | undefined;
    private 'import_token'?: string | undefined;
    private 'expiration_time'?: number | undefined;
    private 'public_key'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateParametersForImportResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withImportToken(importToken: string): CreateParametersForImportResponse {
        this['import_token'] = importToken;
        return this;
    }
    public set importToken(importToken: string | undefined) {
        this['import_token'] = importToken;
    }
    public get importToken() {
        return this['import_token'];
    }
    public withExpirationTime(expirationTime: number): CreateParametersForImportResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime() {
        return this['expiration_time'];
    }
    public withPublicKey(publicKey: string): CreateParametersForImportResponse {
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
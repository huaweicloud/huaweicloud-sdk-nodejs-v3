
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateParametersForImportResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'import_token'?: string;
    private 'expiration_time'?: number;
    private 'public_key'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateParametersForImportResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withImportToken(importToken: string): CreateParametersForImportResponse {
        this['import_token'] = importToken;
        return this;
    }
    public set importToken(importToken: string  | undefined) {
        this['import_token'] = importToken;
    }
    public get importToken(): string | undefined {
        return this['import_token'];
    }
    public withExpirationTime(expirationTime: number): CreateParametersForImportResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withPublicKey(publicKey: string): CreateParametersForImportResponse {
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
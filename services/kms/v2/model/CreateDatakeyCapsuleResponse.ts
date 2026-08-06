
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatakeyCapsuleResponse extends SdkResponse {
    private 'key_id'?: string;
    public datakey?: string;
    private 'datakey_cipher'?: string;
    private 'datakey_capsule'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateDatakeyCapsuleResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withDatakey(datakey: string): CreateDatakeyCapsuleResponse {
        this['datakey'] = datakey;
        return this;
    }
    public withDatakeyCipher(datakeyCipher: string): CreateDatakeyCapsuleResponse {
        this['datakey_cipher'] = datakeyCipher;
        return this;
    }
    public set datakeyCipher(datakeyCipher: string  | undefined) {
        this['datakey_cipher'] = datakeyCipher;
    }
    public get datakeyCipher(): string | undefined {
        return this['datakey_cipher'];
    }
    public withDatakeyCapsule(datakeyCapsule: string): CreateDatakeyCapsuleResponse {
        this['datakey_capsule'] = datakeyCapsule;
        return this;
    }
    public set datakeyCapsule(datakeyCapsule: string  | undefined) {
        this['datakey_capsule'] = datakeyCapsule;
    }
    public get datakeyCapsule(): string | undefined {
        return this['datakey_capsule'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DecryptDatakeyCapsuleResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'instance_id'?: string;
    public datakey?: string;
    private 'datakey_cipher'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): DecryptDatakeyCapsuleResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withInstanceId(instanceId: string): DecryptDatakeyCapsuleResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatakey(datakey: string): DecryptDatakeyCapsuleResponse {
        this['datakey'] = datakey;
        return this;
    }
    public withDatakeyCipher(datakeyCipher: string): DecryptDatakeyCapsuleResponse {
        this['datakey_cipher'] = datakeyCipher;
        return this;
    }
    public set datakeyCipher(datakeyCipher: string  | undefined) {
        this['datakey_cipher'] = datakeyCipher;
    }
    public get datakeyCipher(): string | undefined {
        return this['datakey_cipher'];
    }
}


export class CreateDatakeyCapsuleRequestBody {
    private 'key_id'?: string;
    private 'datakey_length'?: CreateDatakeyCapsuleRequestBodyDatakeyLengthEnum | string;
    private 'public_key'?: string;
    private 'policy_id'?: string;
    private 'key_policy'?: string;
    public constructor(keyId?: string, datakeyLength?: string) { 
        this['key_id'] = keyId;
        this['datakey_length'] = datakeyLength;
    }
    public withKeyId(keyId: string): CreateDatakeyCapsuleRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withDatakeyLength(datakeyLength: CreateDatakeyCapsuleRequestBodyDatakeyLengthEnum | string): CreateDatakeyCapsuleRequestBody {
        this['datakey_length'] = datakeyLength;
        return this;
    }
    public set datakeyLength(datakeyLength: CreateDatakeyCapsuleRequestBodyDatakeyLengthEnum | string  | undefined) {
        this['datakey_length'] = datakeyLength;
    }
    public get datakeyLength(): CreateDatakeyCapsuleRequestBodyDatakeyLengthEnum | string | undefined {
        return this['datakey_length'];
    }
    public withPublicKey(publicKey: string): CreateDatakeyCapsuleRequestBody {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withPolicyId(policyId: string): CreateDatakeyCapsuleRequestBody {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withKeyPolicy(keyPolicy: string): CreateDatakeyCapsuleRequestBody {
        this['key_policy'] = keyPolicy;
        return this;
    }
    public set keyPolicy(keyPolicy: string  | undefined) {
        this['key_policy'] = keyPolicy;
    }
    public get keyPolicy(): string | undefined {
        return this['key_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDatakeyCapsuleRequestBodyDatakeyLengthEnum {
    AES_256 = 'AES_256',
    SM4 = 'SM4'
}

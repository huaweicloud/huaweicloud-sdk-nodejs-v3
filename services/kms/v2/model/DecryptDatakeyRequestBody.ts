

export class DecryptDatakeyRequestBody {
    private 'key_id'?: string;
    private 'cipher_text'?: string;
    private 'datakey_cipher_length'?: string;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public constructor(keyId?: string, cipherText?: string, datakeyCipherLength?: string) { 
        this['key_id'] = keyId;
        this['cipher_text'] = cipherText;
        this['datakey_cipher_length'] = datakeyCipherLength;
    }
    public withKeyId(keyId: string): DecryptDatakeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withCipherText(cipherText: string): DecryptDatakeyRequestBody {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string  | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText(): string | undefined {
        return this['cipher_text'];
    }
    public withDatakeyCipherLength(datakeyCipherLength: string): DecryptDatakeyRequestBody {
        this['datakey_cipher_length'] = datakeyCipherLength;
        return this;
    }
    public set datakeyCipherLength(datakeyCipherLength: string  | undefined) {
        this['datakey_cipher_length'] = datakeyCipherLength;
    }
    public get datakeyCipherLength(): string | undefined {
        return this['datakey_cipher_length'];
    }
    public withAdditionalAuthenticatedData(additionalAuthenticatedData: string): DecryptDatakeyRequestBody {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
        return this;
    }
    public set additionalAuthenticatedData(additionalAuthenticatedData: string  | undefined) {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
    }
    public get additionalAuthenticatedData(): string | undefined {
        return this['additional_authenticated_data'];
    }
    public withSequence(sequence: string): DecryptDatakeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}
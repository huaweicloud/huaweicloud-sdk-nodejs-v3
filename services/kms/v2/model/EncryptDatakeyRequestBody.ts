

export class EncryptDatakeyRequestBody {
    private 'key_id'?: string;
    private 'plain_text'?: string;
    private 'datakey_plain_length'?: string;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public constructor(keyId?: string, plainText?: string, datakeyPlainLength?: string) { 
        this['key_id'] = keyId;
        this['plain_text'] = plainText;
        this['datakey_plain_length'] = datakeyPlainLength;
    }
    public withKeyId(keyId: string): EncryptDatakeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPlainText(plainText: string): EncryptDatakeyRequestBody {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string  | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText(): string | undefined {
        return this['plain_text'];
    }
    public withDatakeyPlainLength(datakeyPlainLength: string): EncryptDatakeyRequestBody {
        this['datakey_plain_length'] = datakeyPlainLength;
        return this;
    }
    public set datakeyPlainLength(datakeyPlainLength: string  | undefined) {
        this['datakey_plain_length'] = datakeyPlainLength;
    }
    public get datakeyPlainLength(): string | undefined {
        return this['datakey_plain_length'];
    }
    public withAdditionalAuthenticatedData(additionalAuthenticatedData: string): EncryptDatakeyRequestBody {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
        return this;
    }
    public set additionalAuthenticatedData(additionalAuthenticatedData: string  | undefined) {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
    }
    public get additionalAuthenticatedData(): string | undefined {
        return this['additional_authenticated_data'];
    }
    public withSequence(sequence: string): EncryptDatakeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}
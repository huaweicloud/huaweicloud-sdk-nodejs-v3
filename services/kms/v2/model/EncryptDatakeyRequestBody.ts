

export class EncryptDatakeyRequestBody {
    private 'key_id': string | undefined;
    private 'plain_text': string | undefined;
    private 'datakey_plain_length': string | undefined;
    public sequence?: string;
    public constructor(keyId?: any, plainText?: any, datakeyPlainLength?: any) { 
        this['key_id'] = keyId;
        this['plain_text'] = plainText;
        this['datakey_plain_length'] = datakeyPlainLength;
    }
    public withKeyId(keyId: string): EncryptDatakeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withPlainText(plainText: string): EncryptDatakeyRequestBody {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText() {
        return this['plain_text'];
    }
    public withDatakeyPlainLength(datakeyPlainLength: string): EncryptDatakeyRequestBody {
        this['datakey_plain_length'] = datakeyPlainLength;
        return this;
    }
    public set datakeyPlainLength(datakeyPlainLength: string | undefined) {
        this['datakey_plain_length'] = datakeyPlainLength;
    }
    public get datakeyPlainLength() {
        return this['datakey_plain_length'];
    }
    public withSequence(sequence: string): EncryptDatakeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}
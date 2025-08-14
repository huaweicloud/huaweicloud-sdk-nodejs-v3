

export class EncryptDatakeyRequestBody {
    private 'key_id'?: string;
    private 'plain_text'?: string;
    private 'datakey_plain_length'?: string;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public pin?: string;
    private 'pin_type'?: string;
    private 'key_spec'?: EncryptDatakeyRequestBodyKeySpecEnum | string;
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
    public withPin(pin: string): EncryptDatakeyRequestBody {
        this['pin'] = pin;
        return this;
    }
    public withPinType(pinType: string): EncryptDatakeyRequestBody {
        this['pin_type'] = pinType;
        return this;
    }
    public set pinType(pinType: string  | undefined) {
        this['pin_type'] = pinType;
    }
    public get pinType(): string | undefined {
        return this['pin_type'];
    }
    public withKeySpec(keySpec: EncryptDatakeyRequestBodyKeySpecEnum | string): EncryptDatakeyRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: EncryptDatakeyRequestBodyKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): EncryptDatakeyRequestBodyKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncryptDatakeyRequestBodyKeySpecEnum {
    SM2 = 'SM2',
    RSA = 'RSA'
}

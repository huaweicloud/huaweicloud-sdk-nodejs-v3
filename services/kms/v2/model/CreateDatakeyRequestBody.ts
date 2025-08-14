

export class CreateDatakeyRequestBody {
    private 'key_id'?: string;
    private 'key_spec'?: CreateDatakeyRequestBodyKeySpecEnum | string;
    private 'datakey_length'?: string;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public pin?: string;
    private 'pin_type'?: CreateDatakeyRequestBodyPinTypeEnum | string;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): CreateDatakeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeySpec(keySpec: CreateDatakeyRequestBodyKeySpecEnum | string): CreateDatakeyRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateDatakeyRequestBodyKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): CreateDatakeyRequestBodyKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withDatakeyLength(datakeyLength: string): CreateDatakeyRequestBody {
        this['datakey_length'] = datakeyLength;
        return this;
    }
    public set datakeyLength(datakeyLength: string  | undefined) {
        this['datakey_length'] = datakeyLength;
    }
    public get datakeyLength(): string | undefined {
        return this['datakey_length'];
    }
    public withAdditionalAuthenticatedData(additionalAuthenticatedData: string): CreateDatakeyRequestBody {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
        return this;
    }
    public set additionalAuthenticatedData(additionalAuthenticatedData: string  | undefined) {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
    }
    public get additionalAuthenticatedData(): string | undefined {
        return this['additional_authenticated_data'];
    }
    public withSequence(sequence: string): CreateDatakeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
    public withPin(pin: string): CreateDatakeyRequestBody {
        this['pin'] = pin;
        return this;
    }
    public withPinType(pinType: CreateDatakeyRequestBodyPinTypeEnum | string): CreateDatakeyRequestBody {
        this['pin_type'] = pinType;
        return this;
    }
    public set pinType(pinType: CreateDatakeyRequestBodyPinTypeEnum | string  | undefined) {
        this['pin_type'] = pinType;
    }
    public get pinType(): CreateDatakeyRequestBodyPinTypeEnum | string | undefined {
        return this['pin_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDatakeyRequestBodyKeySpecEnum {
    AES_256 = 'AES_256',
    AES_128 = 'AES_128',
    SM4 = 'SM4',
    HMAC_256 = 'HMAC_256',
    HMAC_384 = 'HMAC_384',
    HMAC_512 = 'HMAC_512',
    HMAC_SM3 = 'HMAC_SM3'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDatakeyRequestBodyPinTypeEnum {
    CIPHERTEXT = 'CipherText',
    PLAINTEXT = 'PlainText'
}

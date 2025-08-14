

export class CreateEcDatakeyPairRequestBody {
    private 'key_id'?: string;
    private 'key_spec'?: CreateEcDatakeyPairRequestBodyKeySpecEnum | string;
    private 'with_plain_text'?: boolean;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public pin?: string;
    private 'pin_type'?: string;
    public constructor(keyId?: string, keySpec?: string) { 
        this['key_id'] = keyId;
        this['key_spec'] = keySpec;
    }
    public withKeyId(keyId: string): CreateEcDatakeyPairRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeySpec(keySpec: CreateEcDatakeyPairRequestBodyKeySpecEnum | string): CreateEcDatakeyPairRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateEcDatakeyPairRequestBodyKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): CreateEcDatakeyPairRequestBodyKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withWithPlainText(withPlainText: boolean): CreateEcDatakeyPairRequestBody {
        this['with_plain_text'] = withPlainText;
        return this;
    }
    public set withPlainText(withPlainText: boolean  | undefined) {
        this['with_plain_text'] = withPlainText;
    }
    public get withPlainText(): boolean | undefined {
        return this['with_plain_text'];
    }
    public withAdditionalAuthenticatedData(additionalAuthenticatedData: string): CreateEcDatakeyPairRequestBody {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
        return this;
    }
    public set additionalAuthenticatedData(additionalAuthenticatedData: string  | undefined) {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
    }
    public get additionalAuthenticatedData(): string | undefined {
        return this['additional_authenticated_data'];
    }
    public withSequence(sequence: string): CreateEcDatakeyPairRequestBody {
        this['sequence'] = sequence;
        return this;
    }
    public withPin(pin: string): CreateEcDatakeyPairRequestBody {
        this['pin'] = pin;
        return this;
    }
    public withPinType(pinType: string): CreateEcDatakeyPairRequestBody {
        this['pin_type'] = pinType;
        return this;
    }
    public set pinType(pinType: string  | undefined) {
        this['pin_type'] = pinType;
    }
    public get pinType(): string | undefined {
        return this['pin_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEcDatakeyPairRequestBodyKeySpecEnum {
    ECC_NIST_P256 = 'ECC_NIST_P256',
    ECC_NIST_P384 = 'ECC_NIST_P384',
    ECC_NIST_P521 = 'ECC_NIST_P521',
    ECC_SECG_P256K1 = 'ECC_SECG_P256K1',
    SM2 = 'SM2'
}

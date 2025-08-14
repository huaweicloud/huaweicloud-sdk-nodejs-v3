

export class CreatePinRequestBody {
    private 'pin_type'?: CreatePinRequestBodyPinTypeEnum | string;
    private 'keystore_id'?: string;
    public constructor() { 
    }
    public withPinType(pinType: CreatePinRequestBodyPinTypeEnum | string): CreatePinRequestBody {
        this['pin_type'] = pinType;
        return this;
    }
    public set pinType(pinType: CreatePinRequestBodyPinTypeEnum | string  | undefined) {
        this['pin_type'] = pinType;
    }
    public get pinType(): CreatePinRequestBodyPinTypeEnum | string | undefined {
        return this['pin_type'];
    }
    public withKeystoreId(keystoreId: string): CreatePinRequestBody {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePinRequestBodyPinTypeEnum {
    CIPHERTEXT = 'CipherText',
    PLAINTEXT = 'PlainText'
}

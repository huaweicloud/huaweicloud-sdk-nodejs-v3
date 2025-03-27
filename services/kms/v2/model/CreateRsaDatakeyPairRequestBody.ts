

export class CreateRsaDatakeyPairRequestBody {
    private 'key_id'?: string;
    private 'key_spec'?: CreateRsaDatakeyPairRequestBodyKeySpecEnum | string;
    private 'with_plain_text'?: boolean;
    private 'additional_authenticated_data'?: string;
    public sequence?: string;
    public constructor(keyId?: string, keySpec?: string) { 
        this['key_id'] = keyId;
        this['key_spec'] = keySpec;
    }
    public withKeyId(keyId: string): CreateRsaDatakeyPairRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeySpec(keySpec: CreateRsaDatakeyPairRequestBodyKeySpecEnum | string): CreateRsaDatakeyPairRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateRsaDatakeyPairRequestBodyKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): CreateRsaDatakeyPairRequestBodyKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withWithPlainText(withPlainText: boolean): CreateRsaDatakeyPairRequestBody {
        this['with_plain_text'] = withPlainText;
        return this;
    }
    public set withPlainText(withPlainText: boolean  | undefined) {
        this['with_plain_text'] = withPlainText;
    }
    public get withPlainText(): boolean | undefined {
        return this['with_plain_text'];
    }
    public withAdditionalAuthenticatedData(additionalAuthenticatedData: string): CreateRsaDatakeyPairRequestBody {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
        return this;
    }
    public set additionalAuthenticatedData(additionalAuthenticatedData: string  | undefined) {
        this['additional_authenticated_data'] = additionalAuthenticatedData;
    }
    public get additionalAuthenticatedData(): string | undefined {
        return this['additional_authenticated_data'];
    }
    public withSequence(sequence: string): CreateRsaDatakeyPairRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRsaDatakeyPairRequestBodyKeySpecEnum {
    RSA_2048 = 'RSA_2048',
    RSA_3072 = 'RSA_3072',
    RSA_4096 = 'RSA_4096'
}

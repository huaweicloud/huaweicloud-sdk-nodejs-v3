

export class CreateDatakeyRequestBody {
    private 'key_id': string | undefined;
    private 'key_spec'?: CreateDatakeyRequestBodyKeySpecEnum | undefined;
    private 'datakey_length'?: string | undefined;
    public sequence?: string;
    public constructor(keyId?: any) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): CreateDatakeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withKeySpec(keySpec: CreateDatakeyRequestBodyKeySpecEnum): CreateDatakeyRequestBody {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateDatakeyRequestBodyKeySpecEnum | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec() {
        return this['key_spec'];
    }
    public withDatakeyLength(datakeyLength: string): CreateDatakeyRequestBody {
        this['datakey_length'] = datakeyLength;
        return this;
    }
    public set datakeyLength(datakeyLength: string | undefined) {
        this['datakey_length'] = datakeyLength;
    }
    public get datakeyLength() {
        return this['datakey_length'];
    }
    public withSequence(sequence: string): CreateDatakeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDatakeyRequestBodyKeySpecEnum {
    AES_256 = 'AES_256',
    AES_128 = 'AES_128'
}

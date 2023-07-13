

export class UpdateKeyDescriptionRequestBody {
    private 'key_id': string | undefined;
    private 'key_description': string | undefined;
    public sequence?: string;
    public constructor(keyId?: any, keyDescription?: any) { 
        this['key_id'] = keyId;
        this['key_description'] = keyDescription;
    }
    public withKeyId(keyId: string): UpdateKeyDescriptionRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withKeyDescription(keyDescription: string): UpdateKeyDescriptionRequestBody {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription() {
        return this['key_description'];
    }
    public withSequence(sequence: string): UpdateKeyDescriptionRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}
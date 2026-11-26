import { KmsKeyType } from './KmsKeyType';


export class KmsConfiguration {
    private 'key_type'?: KmsKeyType;
    private 'kms_key_id'?: string;
    public constructor(keyType?: KmsKeyType) { 
        this['key_type'] = keyType;
    }
    public withKeyType(keyType: KmsKeyType): KmsConfiguration {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: KmsKeyType  | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType(): KmsKeyType | undefined {
        return this['key_type'];
    }
    public withKmsKeyId(kmsKeyId: string): KmsConfiguration {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
}
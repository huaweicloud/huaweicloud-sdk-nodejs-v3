

export class UpdateSecretRequestBody {
    private 'kms_key_id'?: string | undefined;
    public description?: string;
    public constructor() { 
    }
    public withKmsKeyId(kmsKeyId: string): UpdateSecretRequestBody {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId() {
        return this['kms_key_id'];
    }
    public withDescription(description: string): UpdateSecretRequestBody {
        this['description'] = description;
        return this;
    }
}
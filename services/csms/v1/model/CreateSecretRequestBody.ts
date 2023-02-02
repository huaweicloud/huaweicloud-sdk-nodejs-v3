

export class CreateSecretRequestBody {
    public name: string;
    private 'kms_key_id'?: string | undefined;
    public description?: string;
    private 'secret_binary'?: string | undefined;
    private 'secret_string'?: string | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSecretRequestBody {
        this['name'] = name;
        return this;
    }
    public withKmsKeyId(kmsKeyId: string): CreateSecretRequestBody {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId() {
        return this['kms_key_id'];
    }
    public withDescription(description: string): CreateSecretRequestBody {
        this['description'] = description;
        return this;
    }
    public withSecretBinary(secretBinary: string): CreateSecretRequestBody {
        this['secret_binary'] = secretBinary;
        return this;
    }
    public set secretBinary(secretBinary: string | undefined) {
        this['secret_binary'] = secretBinary;
    }
    public get secretBinary() {
        return this['secret_binary'];
    }
    public withSecretString(secretString: string): CreateSecretRequestBody {
        this['secret_string'] = secretString;
        return this;
    }
    public set secretString(secretString: string | undefined) {
        this['secret_string'] = secretString;
    }
    public get secretString() {
        return this['secret_string'];
    }
}
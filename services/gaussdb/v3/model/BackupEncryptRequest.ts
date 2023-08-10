

export class BackupEncryptRequest {
    public type?: BackupEncryptRequestTypeEnum | string;
    private 'kms_key_id'?: string;
    private 'encryption_status'?: BackupEncryptRequestEncryptionStatusEnum | string;
    public constructor(encryptionStatus?: string) { 
        this['encryption_status'] = encryptionStatus;
    }
    public withType(type: BackupEncryptRequestTypeEnum | string): BackupEncryptRequest {
        this['type'] = type;
        return this;
    }
    public withKmsKeyId(kmsKeyId: string): BackupEncryptRequest {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withEncryptionStatus(encryptionStatus: BackupEncryptRequestEncryptionStatusEnum | string): BackupEncryptRequest {
        this['encryption_status'] = encryptionStatus;
        return this;
    }
    public set encryptionStatus(encryptionStatus: BackupEncryptRequestEncryptionStatusEnum | string  | undefined) {
        this['encryption_status'] = encryptionStatus;
    }
    public get encryptionStatus(): BackupEncryptRequestEncryptionStatusEnum | string | undefined {
        return this['encryption_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupEncryptRequestTypeEnum {
    KMS = 'kms'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupEncryptRequestEncryptionStatusEnum {
    ON = 'on',
    OFF = 'off'
}

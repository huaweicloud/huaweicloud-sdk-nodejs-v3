
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyBackupEncryptStatusResponse extends SdkResponse {
    private 'encryption_status'?: ModifyBackupEncryptStatusResponseEncryptionStatusEnum | string;
    public constructor() { 
        super();
    }
    public withEncryptionStatus(encryptionStatus: ModifyBackupEncryptStatusResponseEncryptionStatusEnum | string): ModifyBackupEncryptStatusResponse {
        this['encryption_status'] = encryptionStatus;
        return this;
    }
    public set encryptionStatus(encryptionStatus: ModifyBackupEncryptStatusResponseEncryptionStatusEnum | string  | undefined) {
        this['encryption_status'] = encryptionStatus;
    }
    public get encryptionStatus(): ModifyBackupEncryptStatusResponseEncryptionStatusEnum | string | undefined {
        return this['encryption_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyBackupEncryptStatusResponseEncryptionStatusEnum {
    ON = 'on',
    OFF = 'off'
}

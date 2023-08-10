
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribeBackupEncryptStatusResponse extends SdkResponse {
    private 'encryption_status'?: DescribeBackupEncryptStatusResponseEncryptionStatusEnum | string;
    public constructor() { 
        super();
    }
    public withEncryptionStatus(encryptionStatus: DescribeBackupEncryptStatusResponseEncryptionStatusEnum | string): DescribeBackupEncryptStatusResponse {
        this['encryption_status'] = encryptionStatus;
        return this;
    }
    public set encryptionStatus(encryptionStatus: DescribeBackupEncryptStatusResponseEncryptionStatusEnum | string  | undefined) {
        this['encryption_status'] = encryptionStatus;
    }
    public get encryptionStatus(): DescribeBackupEncryptStatusResponseEncryptionStatusEnum | string | undefined {
        return this['encryption_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DescribeBackupEncryptStatusResponseEncryptionStatusEnum {
    ON = 'on',
    OFF = 'off'
}

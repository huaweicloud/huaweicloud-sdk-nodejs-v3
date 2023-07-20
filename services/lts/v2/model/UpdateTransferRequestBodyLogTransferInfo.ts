import { TransferDetail } from './TransferDetail';


export class UpdateTransferRequestBodyLogTransferInfo {
    private 'log_storage_format'?: UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string;
    private 'log_transfer_status'?: UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string;
    private 'log_transfer_detail'?: TransferDetail;
    public constructor(logStorageFormat?: string, logTransferStatus?: string, logTransferDetail?: TransferDetail) { 
        this['log_storage_format'] = logStorageFormat;
        this['log_transfer_status'] = logTransferStatus;
        this['log_transfer_detail'] = logTransferDetail;
    }
    public withLogStorageFormat(logStorageFormat: UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string): UpdateTransferRequestBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string  | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat(): UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string | undefined {
        return this['log_storage_format'];
    }
    public withLogTransferStatus(logTransferStatus: UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string): UpdateTransferRequestBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string  | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus(): UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string | undefined {
        return this['log_transfer_status'];
    }
    public withLogTransferDetail(logTransferDetail: TransferDetail): UpdateTransferRequestBodyLogTransferInfo {
        this['log_transfer_detail'] = logTransferDetail;
        return this;
    }
    public set logTransferDetail(logTransferDetail: TransferDetail  | undefined) {
        this['log_transfer_detail'] = logTransferDetail;
    }
    public get logTransferDetail(): TransferDetail | undefined {
        return this['log_transfer_detail'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum {
    JSON = 'JSON',
    RAW = 'RAW'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    EXCEPTION = 'EXCEPTION'
}

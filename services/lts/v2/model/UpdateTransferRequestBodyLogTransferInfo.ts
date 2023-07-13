import { TransferDetail } from './TransferDetail';


export class UpdateTransferRequestBodyLogTransferInfo {
    private 'log_storage_format': UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | undefined;
    private 'log_transfer_status': UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | undefined;
    private 'log_transfer_detail': TransferDetail | undefined;
    public constructor(logStorageFormat?: any, logTransferStatus?: any, logTransferDetail?: any) { 
        this['log_storage_format'] = logStorageFormat;
        this['log_transfer_status'] = logTransferStatus;
        this['log_transfer_detail'] = logTransferDetail;
    }
    public withLogStorageFormat(logStorageFormat: UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum): UpdateTransferRequestBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: UpdateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat() {
        return this['log_storage_format'];
    }
    public withLogTransferStatus(logTransferStatus: UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum): UpdateTransferRequestBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: UpdateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus() {
        return this['log_transfer_status'];
    }
    public withLogTransferDetail(logTransferDetail: TransferDetail): UpdateTransferRequestBodyLogTransferInfo {
        this['log_transfer_detail'] = logTransferDetail;
        return this;
    }
    public set logTransferDetail(logTransferDetail: TransferDetail | undefined) {
        this['log_transfer_detail'] = logTransferDetail;
    }
    public get logTransferDetail() {
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

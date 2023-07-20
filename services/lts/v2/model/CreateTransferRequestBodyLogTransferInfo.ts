import { CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer } from './CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer';
import { TransferDetail } from './TransferDetail';


export class CreateTransferRequestBodyLogTransferInfo {
    private 'log_transfer_type'?: string;
    private 'log_transfer_mode'?: CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | string;
    private 'log_storage_format'?: CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string;
    private 'log_transfer_status'?: CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string;
    private 'log_agency_transfer'?: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer;
    private 'log_transfer_detail'?: TransferDetail;
    public constructor(logTransferType?: string, logTransferMode?: string, logStorageFormat?: string, logTransferStatus?: string, logTransferDetail?: TransferDetail) { 
        this['log_transfer_type'] = logTransferType;
        this['log_transfer_mode'] = logTransferMode;
        this['log_storage_format'] = logStorageFormat;
        this['log_transfer_status'] = logTransferStatus;
        this['log_transfer_detail'] = logTransferDetail;
    }
    public withLogTransferType(logTransferType: string): CreateTransferRequestBodyLogTransferInfo {
        this['log_transfer_type'] = logTransferType;
        return this;
    }
    public set logTransferType(logTransferType: string  | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType(): string | undefined {
        return this['log_transfer_type'];
    }
    public withLogTransferMode(logTransferMode: CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | string): CreateTransferRequestBodyLogTransferInfo {
        this['log_transfer_mode'] = logTransferMode;
        return this;
    }
    public set logTransferMode(logTransferMode: CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | string  | undefined) {
        this['log_transfer_mode'] = logTransferMode;
    }
    public get logTransferMode(): CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | string | undefined {
        return this['log_transfer_mode'];
    }
    public withLogStorageFormat(logStorageFormat: CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string): CreateTransferRequestBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string  | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat(): CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | string | undefined {
        return this['log_storage_format'];
    }
    public withLogTransferStatus(logTransferStatus: CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string): CreateTransferRequestBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string  | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus(): CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | string | undefined {
        return this['log_transfer_status'];
    }
    public withLogAgencyTransfer(logAgencyTransfer: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer): CreateTransferRequestBodyLogTransferInfo {
        this['log_agency_transfer'] = logAgencyTransfer;
        return this;
    }
    public set logAgencyTransfer(logAgencyTransfer: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer  | undefined) {
        this['log_agency_transfer'] = logAgencyTransfer;
    }
    public get logAgencyTransfer(): CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer | undefined {
        return this['log_agency_transfer'];
    }
    public withLogTransferDetail(logTransferDetail: TransferDetail): CreateTransferRequestBodyLogTransferInfo {
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
export enum CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum {
    CYCLE = 'cycle',
    REALTIME = 'realTime'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum {
    JSON = 'JSON',
    RAW = 'RAW'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    EXCEPTION = 'EXCEPTION'
}

import { CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer } from './CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer';
import { TransferDetail } from './TransferDetail';


export class CreateTransferRequestBodyLogTransferInfo {
    private 'log_transfer_type': string | undefined;
    private 'log_transfer_mode': CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | undefined;
    private 'log_storage_format': CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | undefined;
    private 'log_transfer_status': CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | undefined;
    private 'log_agency_transfer'?: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer | undefined;
    private 'log_transfer_detail': TransferDetail | undefined;
    public constructor(logTransferType?: any, logTransferMode?: any, logStorageFormat?: any, logTransferStatus?: any, logTransferDetail?: any) { 
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
    public set logTransferType(logTransferType: string | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType() {
        return this['log_transfer_type'];
    }
    public withLogTransferMode(logTransferMode: CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum): CreateTransferRequestBodyLogTransferInfo {
        this['log_transfer_mode'] = logTransferMode;
        return this;
    }
    public set logTransferMode(logTransferMode: CreateTransferRequestBodyLogTransferInfoLogTransferModeEnum | undefined) {
        this['log_transfer_mode'] = logTransferMode;
    }
    public get logTransferMode() {
        return this['log_transfer_mode'];
    }
    public withLogStorageFormat(logStorageFormat: CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum): CreateTransferRequestBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: CreateTransferRequestBodyLogTransferInfoLogStorageFormatEnum | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat() {
        return this['log_storage_format'];
    }
    public withLogTransferStatus(logTransferStatus: CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum): CreateTransferRequestBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: CreateTransferRequestBodyLogTransferInfoLogTransferStatusEnum | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus() {
        return this['log_transfer_status'];
    }
    public withLogAgencyTransfer(logAgencyTransfer: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer): CreateTransferRequestBodyLogTransferInfo {
        this['log_agency_transfer'] = logAgencyTransfer;
        return this;
    }
    public set logAgencyTransfer(logAgencyTransfer: CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer | undefined) {
        this['log_agency_transfer'] = logAgencyTransfer;
    }
    public get logAgencyTransfer() {
        return this['log_agency_transfer'];
    }
    public withLogTransferDetail(logTransferDetail: TransferDetail): CreateTransferRequestBodyLogTransferInfo {
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

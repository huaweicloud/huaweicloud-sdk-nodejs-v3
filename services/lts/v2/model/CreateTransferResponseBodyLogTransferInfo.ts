import { CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer } from './CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer';
import { TransferDetail } from './TransferDetail';


export class CreateTransferResponseBodyLogTransferInfo {
    private 'log_agency_transfer'?: CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer | undefined;
    private 'log_create_time': number | undefined;
    private 'log_storage_format': CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | undefined;
    private 'log_transfer_detail': TransferDetail | undefined;
    private 'log_transfer_mode': CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | undefined;
    private 'log_transfer_status': CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | undefined;
    private 'log_transfer_type': CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | undefined;
    public constructor(logCreateTime?: any, logStorageFormat?: any, logTransferDetail?: any, logTransferMode?: any, logTransferStatus?: any, logTransferType?: any) { 
        this['log_create_time'] = logCreateTime;
        this['log_storage_format'] = logStorageFormat;
        this['log_transfer_detail'] = logTransferDetail;
        this['log_transfer_mode'] = logTransferMode;
        this['log_transfer_status'] = logTransferStatus;
        this['log_transfer_type'] = logTransferType;
    }
    public withLogAgencyTransfer(logAgencyTransfer: CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer): CreateTransferResponseBodyLogTransferInfo {
        this['log_agency_transfer'] = logAgencyTransfer;
        return this;
    }
    public set logAgencyTransfer(logAgencyTransfer: CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer | undefined) {
        this['log_agency_transfer'] = logAgencyTransfer;
    }
    public get logAgencyTransfer() {
        return this['log_agency_transfer'];
    }
    public withLogCreateTime(logCreateTime: number): CreateTransferResponseBodyLogTransferInfo {
        this['log_create_time'] = logCreateTime;
        return this;
    }
    public set logCreateTime(logCreateTime: number | undefined) {
        this['log_create_time'] = logCreateTime;
    }
    public get logCreateTime() {
        return this['log_create_time'];
    }
    public withLogStorageFormat(logStorageFormat: CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum): CreateTransferResponseBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat() {
        return this['log_storage_format'];
    }
    public withLogTransferDetail(logTransferDetail: TransferDetail): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_detail'] = logTransferDetail;
        return this;
    }
    public set logTransferDetail(logTransferDetail: TransferDetail | undefined) {
        this['log_transfer_detail'] = logTransferDetail;
    }
    public get logTransferDetail() {
        return this['log_transfer_detail'];
    }
    public withLogTransferMode(logTransferMode: CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_mode'] = logTransferMode;
        return this;
    }
    public set logTransferMode(logTransferMode: CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | undefined) {
        this['log_transfer_mode'] = logTransferMode;
    }
    public get logTransferMode() {
        return this['log_transfer_mode'];
    }
    public withLogTransferStatus(logTransferStatus: CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus() {
        return this['log_transfer_status'];
    }
    public withLogTransferType(logTransferType: CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_type'] = logTransferType;
        return this;
    }
    public set logTransferType(logTransferType: CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType() {
        return this['log_transfer_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum {
    JSON = 'JSON',
    RAW = 'RAW'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum {
    CYCLE = 'cycle',
    REALTIME = 'realTime'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    EXCEPTION = 'EXCEPTION'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum {
    OBS = 'OBS',
    DIS = 'DIS',
    DMS = 'DMS'
}

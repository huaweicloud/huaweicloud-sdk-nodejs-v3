import { CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer } from './CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer';


export class CreateTransferResponseBodyLogTransferInfo {
    private 'log_agency_transfer'?: CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer;
    private 'log_create_time'?: number;
    private 'log_storage_format'?: CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | string;
    private 'log_transfer_detail'?: object;
    private 'log_transfer_mode'?: CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | string;
    private 'log_transfer_status'?: CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | string;
    private 'log_transfer_type'?: CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | string;
    public constructor(logCreateTime?: number, logStorageFormat?: string, logTransferDetail?: object, logTransferMode?: string, logTransferStatus?: string, logTransferType?: string) { 
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
    public set logAgencyTransfer(logAgencyTransfer: CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer  | undefined) {
        this['log_agency_transfer'] = logAgencyTransfer;
    }
    public get logAgencyTransfer(): CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer | undefined {
        return this['log_agency_transfer'];
    }
    public withLogCreateTime(logCreateTime: number): CreateTransferResponseBodyLogTransferInfo {
        this['log_create_time'] = logCreateTime;
        return this;
    }
    public set logCreateTime(logCreateTime: number  | undefined) {
        this['log_create_time'] = logCreateTime;
    }
    public get logCreateTime(): number | undefined {
        return this['log_create_time'];
    }
    public withLogStorageFormat(logStorageFormat: CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | string): CreateTransferResponseBodyLogTransferInfo {
        this['log_storage_format'] = logStorageFormat;
        return this;
    }
    public set logStorageFormat(logStorageFormat: CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | string  | undefined) {
        this['log_storage_format'] = logStorageFormat;
    }
    public get logStorageFormat(): CreateTransferResponseBodyLogTransferInfoLogStorageFormatEnum | string | undefined {
        return this['log_storage_format'];
    }
    public withLogTransferDetail(logTransferDetail: object): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_detail'] = logTransferDetail;
        return this;
    }
    public set logTransferDetail(logTransferDetail: object  | undefined) {
        this['log_transfer_detail'] = logTransferDetail;
    }
    public get logTransferDetail(): object | undefined {
        return this['log_transfer_detail'];
    }
    public withLogTransferMode(logTransferMode: CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | string): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_mode'] = logTransferMode;
        return this;
    }
    public set logTransferMode(logTransferMode: CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | string  | undefined) {
        this['log_transfer_mode'] = logTransferMode;
    }
    public get logTransferMode(): CreateTransferResponseBodyLogTransferInfoLogTransferModeEnum | string | undefined {
        return this['log_transfer_mode'];
    }
    public withLogTransferStatus(logTransferStatus: CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | string): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_status'] = logTransferStatus;
        return this;
    }
    public set logTransferStatus(logTransferStatus: CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | string  | undefined) {
        this['log_transfer_status'] = logTransferStatus;
    }
    public get logTransferStatus(): CreateTransferResponseBodyLogTransferInfoLogTransferStatusEnum | string | undefined {
        return this['log_transfer_status'];
    }
    public withLogTransferType(logTransferType: CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | string): CreateTransferResponseBodyLogTransferInfo {
        this['log_transfer_type'] = logTransferType;
        return this;
    }
    public set logTransferType(logTransferType: CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | string  | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType(): CreateTransferResponseBodyLogTransferInfoLogTransferTypeEnum | string | undefined {
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

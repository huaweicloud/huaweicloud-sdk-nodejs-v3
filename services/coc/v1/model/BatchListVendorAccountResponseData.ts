

export class BatchListVendorAccountResponseData {
    public id?: string;
    public vendor?: string;
    private 'account_id'?: string;
    private 'domain_id'?: string;
    private 'account_name'?: string;
    public ak?: string;
    private 'sync_status'?: BatchListVendorAccountResponseDataSyncStatusEnum | string;
    private 'failure_msg'?: string;
    private 'sync_date'?: Date;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): BatchListVendorAccountResponseData {
        this['id'] = id;
        return this;
    }
    public withVendor(vendor: string): BatchListVendorAccountResponseData {
        this['vendor'] = vendor;
        return this;
    }
    public withAccountId(accountId: string): BatchListVendorAccountResponseData {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withDomainId(domainId: string): BatchListVendorAccountResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAccountName(accountName: string): BatchListVendorAccountResponseData {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAk(ak: string): BatchListVendorAccountResponseData {
        this['ak'] = ak;
        return this;
    }
    public withSyncStatus(syncStatus: BatchListVendorAccountResponseDataSyncStatusEnum | string): BatchListVendorAccountResponseData {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: BatchListVendorAccountResponseDataSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): BatchListVendorAccountResponseDataSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withFailureMsg(failureMsg: string): BatchListVendorAccountResponseData {
        this['failure_msg'] = failureMsg;
        return this;
    }
    public set failureMsg(failureMsg: string  | undefined) {
        this['failure_msg'] = failureMsg;
    }
    public get failureMsg(): string | undefined {
        return this['failure_msg'];
    }
    public withSyncDate(syncDate: Date): BatchListVendorAccountResponseData {
        this['sync_date'] = syncDate;
        return this;
    }
    public set syncDate(syncDate: Date  | undefined) {
        this['sync_date'] = syncDate;
    }
    public get syncDate(): Date | undefined {
        return this['sync_date'];
    }
    public withCreateTime(createTime: Date): BatchListVendorAccountResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): BatchListVendorAccountResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListVendorAccountResponseDataSyncStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}

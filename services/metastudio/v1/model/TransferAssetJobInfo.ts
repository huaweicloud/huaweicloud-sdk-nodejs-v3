import { DigitalAssetSummary } from './DigitalAssetSummary';
import { ErrorResponse } from './ErrorResponse';
import { TransferTypeEnum } from './TransferTypeEnum';


export class TransferAssetJobInfo {
    private 'job_id'?: string;
    private 'transfer_type'?: TransferTypeEnum;
    private 'transfer_assets'?: Array<DigitalAssetSummary>;
    public state?: TransferAssetJobInfoStateEnum | string;
    private 'src_project_id'?: string;
    private 'dest_project_id'?: string;
    public memo?: string;
    public reason?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'expire_time'?: string;
    private 'is_need_billing'?: boolean;
    private 'error_info'?: ErrorResponse;
    public constructor() { 
    }
    public withJobId(jobId: string): TransferAssetJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTransferType(transferType: TransferTypeEnum): TransferAssetJobInfo {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: TransferTypeEnum  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): TransferTypeEnum | undefined {
        return this['transfer_type'];
    }
    public withTransferAssets(transferAssets: Array<DigitalAssetSummary>): TransferAssetJobInfo {
        this['transfer_assets'] = transferAssets;
        return this;
    }
    public set transferAssets(transferAssets: Array<DigitalAssetSummary>  | undefined) {
        this['transfer_assets'] = transferAssets;
    }
    public get transferAssets(): Array<DigitalAssetSummary> | undefined {
        return this['transfer_assets'];
    }
    public withState(state: TransferAssetJobInfoStateEnum | string): TransferAssetJobInfo {
        this['state'] = state;
        return this;
    }
    public withSrcProjectId(srcProjectId: string): TransferAssetJobInfo {
        this['src_project_id'] = srcProjectId;
        return this;
    }
    public set srcProjectId(srcProjectId: string  | undefined) {
        this['src_project_id'] = srcProjectId;
    }
    public get srcProjectId(): string | undefined {
        return this['src_project_id'];
    }
    public withDestProjectId(destProjectId: string): TransferAssetJobInfo {
        this['dest_project_id'] = destProjectId;
        return this;
    }
    public set destProjectId(destProjectId: string  | undefined) {
        this['dest_project_id'] = destProjectId;
    }
    public get destProjectId(): string | undefined {
        return this['dest_project_id'];
    }
    public withMemo(memo: string): TransferAssetJobInfo {
        this['memo'] = memo;
        return this;
    }
    public withReason(reason: string): TransferAssetJobInfo {
        this['reason'] = reason;
        return this;
    }
    public withStartTime(startTime: string): TransferAssetJobInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): TransferAssetJobInfo {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withExpireTime(expireTime: string): TransferAssetJobInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withIsNeedBilling(isNeedBilling: boolean): TransferAssetJobInfo {
        this['is_need_billing'] = isNeedBilling;
        return this;
    }
    public set isNeedBilling(isNeedBilling: boolean  | undefined) {
        this['is_need_billing'] = isNeedBilling;
    }
    public get isNeedBilling(): boolean | undefined {
        return this['is_need_billing'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): TransferAssetJobInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransferAssetJobInfoStateEnum {
    PROCESSING = 'PROCESSING',
    ACCEPT = 'ACCEPT',
    REJECT = 'REJECT',
    CANCEL = 'CANCEL',
    FAIL = 'FAIL'
}

import { TransferTypeEnum } from './TransferTypeEnum';


export class TransferAssetReq {
    private 'transfer_type'?: TransferTypeEnum;
    private 'asset_ids'?: Array<string>;
    private 'dest_project_id'?: string;
    public memo?: string;
    private 'auto_accept'?: boolean;
    private 'auto_active'?: boolean;
    private 'is_need_billing'?: boolean;
    private 'transfer_job_id'?: string;
    public constructor(assetIds?: Array<string>, destProjectId?: string) { 
        this['asset_ids'] = assetIds;
        this['dest_project_id'] = destProjectId;
    }
    public withTransferType(transferType: TransferTypeEnum): TransferAssetReq {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: TransferTypeEnum  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): TransferTypeEnum | undefined {
        return this['transfer_type'];
    }
    public withAssetIds(assetIds: Array<string>): TransferAssetReq {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
    public withDestProjectId(destProjectId: string): TransferAssetReq {
        this['dest_project_id'] = destProjectId;
        return this;
    }
    public set destProjectId(destProjectId: string  | undefined) {
        this['dest_project_id'] = destProjectId;
    }
    public get destProjectId(): string | undefined {
        return this['dest_project_id'];
    }
    public withMemo(memo: string): TransferAssetReq {
        this['memo'] = memo;
        return this;
    }
    public withAutoAccept(autoAccept: boolean): TransferAssetReq {
        this['auto_accept'] = autoAccept;
        return this;
    }
    public set autoAccept(autoAccept: boolean  | undefined) {
        this['auto_accept'] = autoAccept;
    }
    public get autoAccept(): boolean | undefined {
        return this['auto_accept'];
    }
    public withAutoActive(autoActive: boolean): TransferAssetReq {
        this['auto_active'] = autoActive;
        return this;
    }
    public set autoActive(autoActive: boolean  | undefined) {
        this['auto_active'] = autoActive;
    }
    public get autoActive(): boolean | undefined {
        return this['auto_active'];
    }
    public withIsNeedBilling(isNeedBilling: boolean): TransferAssetReq {
        this['is_need_billing'] = isNeedBilling;
        return this;
    }
    public set isNeedBilling(isNeedBilling: boolean  | undefined) {
        this['is_need_billing'] = isNeedBilling;
    }
    public get isNeedBilling(): boolean | undefined {
        return this['is_need_billing'];
    }
    public withTransferJobId(transferJobId: string): TransferAssetReq {
        this['transfer_job_id'] = transferJobId;
        return this;
    }
    public set transferJobId(transferJobId: string  | undefined) {
        this['transfer_job_id'] = transferJobId;
    }
    public get transferJobId(): string | undefined {
        return this['transfer_job_id'];
    }
}
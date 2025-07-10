import { BackupTransferInfo } from './BackupTransferInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupTransfersResponse extends SdkResponse {
    public total?: number;
    private 'transfer_list'?: Array<BackupTransferInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBackupTransfersResponse {
        this['total'] = total;
        return this;
    }
    public withTransferList(transferList: Array<BackupTransferInfo>): ListBackupTransfersResponse {
        this['transfer_list'] = transferList;
        return this;
    }
    public set transferList(transferList: Array<BackupTransferInfo>  | undefined) {
        this['transfer_list'] = transferList;
    }
    public get transferList(): Array<BackupTransferInfo> | undefined {
        return this['transfer_list'];
    }
}
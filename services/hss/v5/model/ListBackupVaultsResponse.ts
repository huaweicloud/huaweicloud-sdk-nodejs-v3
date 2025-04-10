import { BackupVaultInfo } from './BackupVaultInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupVaultsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<BackupVaultInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBackupVaultsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<BackupVaultInfo>): ListBackupVaultsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BackupVaultInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BackupVaultInfo> | undefined {
        return this['data_list'];
    }
}
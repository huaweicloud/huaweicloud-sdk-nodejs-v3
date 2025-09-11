import { BackupInfo } from './BackupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditBackupInfoResponse extends SdkResponse {
    private 'data_list'?: Array<BackupInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<BackupInfo>): ListAuditBackupInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BackupInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BackupInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAuditBackupInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}
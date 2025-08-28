import { WtpBackupHostResponseInfo } from './WtpBackupHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupHostsInfoResponse extends SdkResponse {
    private 'data_list'?: Array<WtpBackupHostResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<WtpBackupHostResponseInfo>): ListBackupHostsInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WtpBackupHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WtpBackupHostResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListBackupHostsInfoResponse {
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
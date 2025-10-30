import { GetBackupPolicyResponseInfo } from './GetBackupPolicyResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupPolicyResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<GetBackupPolicyResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBackupPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<GetBackupPolicyResponseInfo>): ListBackupPolicyResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<GetBackupPolicyResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<GetBackupPolicyResponseInfo> | undefined {
        return this['data_list'];
    }
}
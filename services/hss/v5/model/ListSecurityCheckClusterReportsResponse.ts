import { SecurityCheckClusterReports } from './SecurityCheckClusterReports';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityCheckClusterReportsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityCheckClusterReports>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSecurityCheckClusterReportsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityCheckClusterReports>): ListSecurityCheckClusterReportsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityCheckClusterReports>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityCheckClusterReports> | undefined {
        return this['data_list'];
    }
}
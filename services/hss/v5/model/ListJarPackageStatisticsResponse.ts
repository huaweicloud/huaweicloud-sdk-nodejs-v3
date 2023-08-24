import { JarPackageStatisticsResponseInfo } from './JarPackageStatisticsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJarPackageStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<JarPackageStatisticsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListJarPackageStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<JarPackageStatisticsResponseInfo>): ListJarPackageStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<JarPackageStatisticsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<JarPackageStatisticsResponseInfo> | undefined {
        return this['data_list'];
    }
}
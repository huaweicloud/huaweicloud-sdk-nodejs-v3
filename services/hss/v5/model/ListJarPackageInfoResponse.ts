import { JarPackageInfo } from './JarPackageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJarPackageInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<JarPackageInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListJarPackageInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<JarPackageInfo>): ListJarPackageInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<JarPackageInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<JarPackageInfo> | undefined {
        return this['data_list'];
    }
}
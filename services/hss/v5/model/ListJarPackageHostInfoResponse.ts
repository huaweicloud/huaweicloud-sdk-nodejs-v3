import { JarPackageHostInfo } from './JarPackageHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJarPackageHostInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<JarPackageHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListJarPackageHostInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<JarPackageHostInfo>): ListJarPackageHostInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<JarPackageHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<JarPackageHostInfo> | undefined {
        return this['data_list'];
    }
}
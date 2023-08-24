import { HostVulInfo } from './HostVulInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostVulsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostVulInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostVulsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostVulInfo>): ListHostVulsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostVulInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostVulInfo> | undefined {
        return this['data_list'];
    }
}
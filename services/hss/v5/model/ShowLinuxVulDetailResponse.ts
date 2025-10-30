import { LinuxVulDetailInfo } from './LinuxVulDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLinuxVulDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LinuxVulDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowLinuxVulDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LinuxVulDetailInfo>): ShowLinuxVulDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LinuxVulDetailInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LinuxVulDetailInfo> | undefined {
        return this['data_list'];
    }
}
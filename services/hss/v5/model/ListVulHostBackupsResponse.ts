import { VulHostBackupsResponseInfoDataList } from './VulHostBackupsResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulHostBackupsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulHostBackupsResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulHostBackupsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulHostBackupsResponseInfoDataList>): ListVulHostBackupsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulHostBackupsResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulHostBackupsResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}
import { ImageAppsInfo } from './ImageAppsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageAppsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageAppsInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageAppsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageAppsInfo>): ListImageAppsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageAppsInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageAppsInfo> | undefined {
        return this['data_list'];
    }
}
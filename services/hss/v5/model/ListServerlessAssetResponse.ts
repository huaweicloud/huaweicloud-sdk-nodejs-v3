import { ServerlessAssetBaseInfo } from './ServerlessAssetBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerlessAssetResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ServerlessAssetBaseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListServerlessAssetResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ServerlessAssetBaseInfo>): ListServerlessAssetResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ServerlessAssetBaseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ServerlessAssetBaseInfo> | undefined {
        return this['data_list'];
    }
}
import { CICDImageResponseInfo } from './CICDImageResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCicdImagesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<CICDImageResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCicdImagesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<CICDImageResponseInfo>): ListCicdImagesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CICDImageResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CICDImageResponseInfo> | undefined {
        return this['data_list'];
    }
}
import { ImagePwdComplexityInfoResponseInfo } from './ImagePwdComplexityInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagePwdComplexityResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImagePwdComplexityInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImagePwdComplexityResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImagePwdComplexityInfoResponseInfo>): ListImagePwdComplexityResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImagePwdComplexityInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImagePwdComplexityInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}
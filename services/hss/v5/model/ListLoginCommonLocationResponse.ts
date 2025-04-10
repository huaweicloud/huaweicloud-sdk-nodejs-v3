import { LoginCommonLocationResponseInfo } from './LoginCommonLocationResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoginCommonLocationResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LoginCommonLocationResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLoginCommonLocationResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LoginCommonLocationResponseInfo>): ListLoginCommonLocationResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LoginCommonLocationResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LoginCommonLocationResponseInfo> | undefined {
        return this['data_list'];
    }
}
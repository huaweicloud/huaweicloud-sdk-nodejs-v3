import { TwoFactorLoginHostResponseInfo } from './TwoFactorLoginHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTwoFactorLoginHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<TwoFactorLoginHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListTwoFactorLoginHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<TwoFactorLoginHostResponseInfo>): ListTwoFactorLoginHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<TwoFactorLoginHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<TwoFactorLoginHostResponseInfo> | undefined {
        return this['data_list'];
    }
}
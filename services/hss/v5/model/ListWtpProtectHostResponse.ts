import { WtpProtectHostResponseInfo } from './WtpProtectHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWtpProtectHostResponse extends SdkResponse {
    private 'data_list'?: Array<WtpProtectHostResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<WtpProtectHostResponseInfo>): ListWtpProtectHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WtpProtectHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WtpProtectHostResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListWtpProtectHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}
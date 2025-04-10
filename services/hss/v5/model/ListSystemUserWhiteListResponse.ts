import { SystemUserWhiteListResponseInfo } from './SystemUserWhiteListResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSystemUserWhiteListResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'remain_num'?: number;
    private 'limit_num'?: number;
    private 'data_list'?: Array<SystemUserWhiteListResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSystemUserWhiteListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withRemainNum(remainNum: number): ListSystemUserWhiteListResponse {
        this['remain_num'] = remainNum;
        return this;
    }
    public set remainNum(remainNum: number  | undefined) {
        this['remain_num'] = remainNum;
    }
    public get remainNum(): number | undefined {
        return this['remain_num'];
    }
    public withLimitNum(limitNum: number): ListSystemUserWhiteListResponse {
        this['limit_num'] = limitNum;
        return this;
    }
    public set limitNum(limitNum: number  | undefined) {
        this['limit_num'] = limitNum;
    }
    public get limitNum(): number | undefined {
        return this['limit_num'];
    }
    public withDataList(dataList: Array<SystemUserWhiteListResponseInfo>): ListSystemUserWhiteListResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SystemUserWhiteListResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SystemUserWhiteListResponseInfo> | undefined {
        return this['data_list'];
    }
}
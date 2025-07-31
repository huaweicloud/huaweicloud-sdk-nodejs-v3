import { BaselineWhiteListsResponseInfo } from './BaselineWhiteListsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBaselineWhiteListsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<BaselineWhiteListsResponseInfo>;
    private 'tag_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBaselineWhiteListsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<BaselineWhiteListsResponseInfo>): ListBaselineWhiteListsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BaselineWhiteListsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BaselineWhiteListsResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTagList(tagList: Array<string>): ListBaselineWhiteListsResponse {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
}
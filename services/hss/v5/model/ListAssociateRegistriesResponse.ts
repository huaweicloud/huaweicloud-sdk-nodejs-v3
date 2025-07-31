import { AssociateRegistriesResponseInfo } from './AssociateRegistriesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociateRegistriesResponse extends SdkResponse {
    private 'data_list'?: Array<AssociateRegistriesResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AssociateRegistriesResponseInfo>): ListAssociateRegistriesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AssociateRegistriesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AssociateRegistriesResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAssociateRegistriesResponse {
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
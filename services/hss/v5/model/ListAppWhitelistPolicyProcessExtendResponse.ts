import { AppWhitelistPolicyProcessExtendResponseInfo } from './AppWhitelistPolicyProcessExtendResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppWhitelistPolicyProcessExtendResponse extends SdkResponse {
    private 'data_list'?: Array<AppWhitelistPolicyProcessExtendResponseInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AppWhitelistPolicyProcessExtendResponseInfo>): ListAppWhitelistPolicyProcessExtendResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppWhitelistPolicyProcessExtendResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppWhitelistPolicyProcessExtendResponseInfo> | undefined {
        return this['data_list'];
    }
}
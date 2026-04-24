import { DNatInfoResult } from './DNatInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDNatInfoResponse extends SdkResponse {
    private 'dnat_list'?: Array<DNatInfoResult>;
    public constructor() { 
        super();
    }
    public withDnatList(dnatList: Array<DNatInfoResult>): ListDNatInfoResponse {
        this['dnat_list'] = dnatList;
        return this;
    }
    public set dnatList(dnatList: Array<DNatInfoResult>  | undefined) {
        this['dnat_list'] = dnatList;
    }
    public get dnatList(): Array<DNatInfoResult> | undefined {
        return this['dnat_list'];
    }
}
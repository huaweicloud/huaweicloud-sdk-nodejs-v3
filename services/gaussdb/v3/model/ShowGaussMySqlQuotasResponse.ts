import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlQuotasResponse extends SdkResponse {
    private 'quota_list'?: Array<Quota>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withQuotaList(quotaList: Array<Quota>): ShowGaussMySqlQuotasResponse {
        this['quota_list'] = quotaList;
        return this;
    }
    public set quotaList(quotaList: Array<Quota>  | undefined) {
        this['quota_list'] = quotaList;
    }
    public get quotaList(): Array<Quota> | undefined {
        return this['quota_list'];
    }
    public withTotalCount(totalCount: number): ShowGaussMySqlQuotasResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
import { SetQuota } from './SetQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetGaussMySqlQuotasResponse extends SdkResponse {
    private 'quota_list'?: Array<SetQuota>;
    public constructor() { 
        super();
    }
    public withQuotaList(quotaList: Array<SetQuota>): SetGaussMySqlQuotasResponse {
        this['quota_list'] = quotaList;
        return this;
    }
    public set quotaList(quotaList: Array<SetQuota>  | undefined) {
        this['quota_list'] = quotaList;
    }
    public get quotaList(): Array<SetQuota> | undefined {
        return this['quota_list'];
    }
}
import { QuotaList } from './QuotaList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public quotas?: QuotaList;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowQuotaResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withQuotas(quotas: QuotaList): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
}
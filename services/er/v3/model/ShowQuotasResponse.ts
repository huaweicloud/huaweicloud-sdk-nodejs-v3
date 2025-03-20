import { PageInfo } from './PageInfo';
import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasResponse extends SdkResponse {
    public quotas?: Array<Quota>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<Quota>): ShowQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowQuotasResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}
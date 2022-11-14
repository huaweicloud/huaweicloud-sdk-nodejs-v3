import { AlertNoticeConfigResponse } from './AlertNoticeConfigResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNoticeConfigsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AlertNoticeConfigResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListNoticeConfigsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AlertNoticeConfigResponse>): ListNoticeConfigsResponse {
        this['items'] = items;
        return this;
    }
}
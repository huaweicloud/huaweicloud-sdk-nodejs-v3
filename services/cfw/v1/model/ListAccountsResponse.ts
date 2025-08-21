import { PageDataAccountVO } from './PageDataAccountVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountsResponse extends SdkResponse {
    public data?: PageDataAccountVO;
    public constructor() { 
        super();
    }
    public withData(data: PageDataAccountVO): ListAccountsResponse {
        this['data'] = data;
        return this;
    }
}
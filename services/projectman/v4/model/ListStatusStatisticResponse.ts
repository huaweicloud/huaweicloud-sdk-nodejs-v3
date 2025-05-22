import { UserStatusStatistic } from './UserStatusStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatusStatisticResponse extends SdkResponse {
    public body?: Array<UserStatusStatistic>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserStatusStatistic>): ListStatusStatisticResponse {
        this['body'] = body;
        return this;
    }
}
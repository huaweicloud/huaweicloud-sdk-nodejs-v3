import { StatusResp } from './StatusResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadbalancersStatusResponse extends SdkResponse {
    public statuses?: StatusResp;
    public constructor() { 
        super();
    }
    public withStatuses(statuses: StatusResp): ShowLoadbalancersStatusResponse {
        this['statuses'] = statuses;
        return this;
    }
}
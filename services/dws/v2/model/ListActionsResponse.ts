import { ActionDomainInfoDetail } from './ActionDomainInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActionsResponse extends SdkResponse {
    public count?: number;
    private 'action_info'?: Array<ActionDomainInfoDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListActionsResponse {
        this['count'] = count;
        return this;
    }
    public withActionInfo(actionInfo: Array<ActionDomainInfoDetail>): ListActionsResponse {
        this['action_info'] = actionInfo;
        return this;
    }
    public set actionInfo(actionInfo: Array<ActionDomainInfoDetail>  | undefined) {
        this['action_info'] = actionInfo;
    }
    public get actionInfo(): Array<ActionDomainInfoDetail> | undefined {
        return this['action_info'];
    }
}
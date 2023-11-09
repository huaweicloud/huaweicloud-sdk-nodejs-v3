import { TicsLeagueAuditLog } from './TicsLeagueAuditLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInfoResponse extends SdkResponse {
    public lists?: Array<TicsLeagueAuditLog>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withLists(lists: Array<TicsLeagueAuditLog>): ListAuditInfoResponse {
        this['lists'] = lists;
        return this;
    }
    public withTotal(total: number): ListAuditInfoResponse {
        this['total'] = total;
        return this;
    }
}
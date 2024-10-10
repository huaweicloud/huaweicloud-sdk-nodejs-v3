import { ListDDoSEventData } from './ListDDoSEventData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDDoSAttackEventResponse extends SdkResponse {
    public total?: number;
    public data?: Array<ListDDoSEventData>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDDoSAttackEventResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<ListDDoSEventData>): ListDDoSAttackEventResponse {
        this['data'] = data;
        return this;
    }
}
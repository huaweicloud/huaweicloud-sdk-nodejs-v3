import { ListWafAttackEventlist } from './ListWafAttackEventlist';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafAttackEventResponse extends SdkResponse {
    public total?: number;
    public list?: Array<ListWafAttackEventlist>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWafAttackEventResponse {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<ListWafAttackEventlist>): ListWafAttackEventResponse {
        this['list'] = list;
        return this;
    }
}
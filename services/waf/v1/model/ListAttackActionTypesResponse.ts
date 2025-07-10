import { AttackActionCountItem } from './AttackActionCountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttackActionTypesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AttackActionCountItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAttackActionTypesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AttackActionCountItem>): ListAttackActionTypesResponse {
        this['items'] = items;
        return this;
    }
}
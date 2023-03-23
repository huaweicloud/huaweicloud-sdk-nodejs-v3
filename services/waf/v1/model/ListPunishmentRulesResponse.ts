import { PunishmentInfo } from './PunishmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPunishmentRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PunishmentInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPunishmentRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PunishmentInfo>): ListPunishmentRulesResponse {
        this['items'] = items;
        return this;
    }
}
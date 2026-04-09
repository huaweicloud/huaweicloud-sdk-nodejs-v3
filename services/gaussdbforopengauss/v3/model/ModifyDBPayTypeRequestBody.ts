import { PeriodChargeInfoOption } from './PeriodChargeInfoOption';


export class ModifyDBPayTypeRequestBody {
    private 'entity_ids'?: Array<string>;
    private 'charge_info'?: PeriodChargeInfoOption;
    public constructor(entityIds?: Array<string>, chargeInfo?: PeriodChargeInfoOption) { 
        this['entity_ids'] = entityIds;
        this['charge_info'] = chargeInfo;
    }
    public withEntityIds(entityIds: Array<string>): ModifyDBPayTypeRequestBody {
        this['entity_ids'] = entityIds;
        return this;
    }
    public set entityIds(entityIds: Array<string>  | undefined) {
        this['entity_ids'] = entityIds;
    }
    public get entityIds(): Array<string> | undefined {
        return this['entity_ids'];
    }
    public withChargeInfo(chargeInfo: PeriodChargeInfoOption): ModifyDBPayTypeRequestBody {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: PeriodChargeInfoOption  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): PeriodChargeInfoOption | undefined {
        return this['charge_info'];
    }
}
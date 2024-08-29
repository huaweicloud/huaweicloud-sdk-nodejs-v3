import { MarketModelPrepaidInfo } from './MarketModelPrepaidInfo';


export class MarketModel {
    private 'charge_mode'?: MarketModelChargeModeEnum | string;
    private 'prepaid_info'?: MarketModelPrepaidInfo;
    public constructor() { 
    }
    public withChargeMode(chargeMode: MarketModelChargeModeEnum | string): MarketModel {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: MarketModelChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): MarketModelChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withPrepaidInfo(prepaidInfo: MarketModelPrepaidInfo): MarketModel {
        this['prepaid_info'] = prepaidInfo;
        return this;
    }
    public set prepaidInfo(prepaidInfo: MarketModelPrepaidInfo  | undefined) {
        this['prepaid_info'] = prepaidInfo;
    }
    public get prepaidInfo(): MarketModelPrepaidInfo | undefined {
        return this['prepaid_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MarketModelChargeModeEnum {
    SPOT = 'spot',
    PREPAID = 'prepaid',
    POSTPAID = 'postpaid'
}

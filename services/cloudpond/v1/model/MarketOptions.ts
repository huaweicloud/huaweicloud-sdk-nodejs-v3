import { ChargeMode } from './ChargeMode';
import { PrepaidOptions } from './PrepaidOptions';
import { Strategy } from './Strategy';


export class MarketOptions {
    private 'charge_mode'?: ChargeMode;
    private 'prepaid_options'?: PrepaidOptions;
    public strategies?: Array<Strategy>;
    public constructor() { 
    }
    public withChargeMode(chargeMode: ChargeMode): MarketOptions {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChargeMode  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChargeMode | undefined {
        return this['charge_mode'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidOptions): MarketOptions {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidOptions  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): PrepaidOptions | undefined {
        return this['prepaid_options'];
    }
    public withStrategies(strategies: Array<Strategy>): MarketOptions {
        this['strategies'] = strategies;
        return this;
    }
}
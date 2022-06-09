import { PrepaidChangeChargeModeOption } from './PrepaidChangeChargeModeOption';


export class ChangeLoadbalancerChargeModeRequestBody {
    private 'loadbalancer_ids': Array<string> | undefined;
    private 'charge_mode': ChangeLoadbalancerChargeModeRequestBodyChargeModeEnum | undefined;
    private 'prepaid_options'?: PrepaidChangeChargeModeOption | undefined;
    public constructor(loadbalancerIds?: any, chargeMode?: any) { 
        this['loadbalancer_ids'] = loadbalancerIds;
        this['charge_mode'] = chargeMode;
    }
    public withLoadbalancerIds(loadbalancerIds: Array<string>): ChangeLoadbalancerChargeModeRequestBody {
        this['loadbalancer_ids'] = loadbalancerIds;
        return this;
    }
    public set loadbalancerIds(loadbalancerIds: Array<string> | undefined) {
        this['loadbalancer_ids'] = loadbalancerIds;
    }
    public get loadbalancerIds() {
        return this['loadbalancer_ids'];
    }
    public withChargeMode(chargeMode: ChangeLoadbalancerChargeModeRequestBodyChargeModeEnum): ChangeLoadbalancerChargeModeRequestBody {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChangeLoadbalancerChargeModeRequestBodyChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withPrepaidOptions(prepaidOptions: PrepaidChangeChargeModeOption): ChangeLoadbalancerChargeModeRequestBody {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidChangeChargeModeOption | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions() {
        return this['prepaid_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeLoadbalancerChargeModeRequestBodyChargeModeEnum {
    PREPAID = 'prepaid'
}

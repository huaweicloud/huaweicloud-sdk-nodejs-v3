

export class ChargeInfo {
    private 'charge_mode': string | undefined;
    public constructor(chargeMode?: any) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: string): ChargeInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
}
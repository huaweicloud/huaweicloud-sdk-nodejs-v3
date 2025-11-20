

export class PostPaidChargeInfos {
    private 'charge_mode'?: string;
    public constructor(chargeMode?: string) { 
        this['charge_mode'] = chargeMode;
    }
    public withChargeMode(chargeMode: string): PostPaidChargeInfos {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
}
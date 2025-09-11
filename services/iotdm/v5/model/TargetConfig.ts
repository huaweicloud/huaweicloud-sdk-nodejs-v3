import { Flavor } from './Flavor';


export class TargetConfig {
    public flavor?: Flavor;
    private 'charge_mode'?: string;
    public constructor() { 
    }
    public withFlavor(flavor: Flavor): TargetConfig {
        this['flavor'] = flavor;
        return this;
    }
    public withChargeMode(chargeMode: string): TargetConfig {
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